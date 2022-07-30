import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../app-employeers-list/app-employeers-list";
import EmployeesAddForm from "../app-employeers-add-form/app-employeers-add-form";

import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John C.", salary: 800, increase: false, id: 1, rise: true },
				{ name: "Alex M.", salary: 3000, increase: true, id: 2, rise: false, },
				{ name: "Carl W.", salary: 15000, increase: false, id: 3, rise: false, },
			],
			term: "",
			filter: "all",
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem=>elem.id === id);

			/* const before = data.slice(0, index);
				  const after = data.slice(index + 1);
	  
				  const newArr = [...before, ...after]; */

			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	/* onToggleIncrease = (id) => {
		  // this.setState(({data})=>{
		  //     const index = data.findIndex(elem=>elem.id === id);
  
		  //     const old = data[index]
  
		  //     const newItem = {...old, increase: !old.increase}
  
		  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
  
		  //     return {
		  //         data: newArr
		  //     }
		  // })
		  this.setState(({data})=>({
			  data: data.map(item=> {
				  if (item.id === id) {
					  return {
						  ...item,
						  increase: !item.increase
					  }
				  }
				  return item
			  })
		  }))
	  } */

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {
						...item,
						[prop]: !item[prop],
					};
				}
				return item;
			}),
		}));
	};

	/* onToggleRise = (id) => {
		  this.setState(({data})=>({
			  data: data.map(item=> {
				  if (item.id === id) {
					  return {
						  ...item,
						  rise: !item.rise
					  }
				  }
				  return item
			  })
		  }))
	  } */

	searchEm = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSerch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen1000":
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	onFilterSelect = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;

		const emploees = this.state.data.length;

		const increase = this.state.data.filter((item) => item.increase).length;

		const visivleData = this.filterPost(this.searchEm(data, term), filter);

		return (
			<div className="app">
				<AppInfo emploees={emploees} increase={increase} />

				<div className="search-panel">
					<SearchPanel onUpdateSerch={this.onUpdateSerch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				{/* <div></div> */}

				<EmployeesList
					data={visivleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
