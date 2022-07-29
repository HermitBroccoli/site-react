import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../app-employeers-list/app-employeers-list';
import EmployeesAddForm from '../app-employeers-add-form/app-employeers-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList />
            <EmployeesAddForm />
        </div>
    )
}

export default App;