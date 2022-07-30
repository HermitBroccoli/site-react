import { Component } from 'react';
import './app-search.css';

class SearchPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSerch = (e) => {
		const term = e.target.value;

		this.setState({ term });

		this.props.onUpdateSerch(term);
	}

	render() {
		return (
			<input type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={this.state.term}
				onChange={this.onUpdateSerch} />
		)
	}
}

export default SearchPanel;