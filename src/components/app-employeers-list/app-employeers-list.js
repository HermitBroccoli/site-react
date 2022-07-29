
import EmployeesListItem from '../app-employeers-list-item/app-employeers-list-item';

import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
}


export default EmployeesList; 