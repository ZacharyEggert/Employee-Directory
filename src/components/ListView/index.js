import React from "react";
import ListItem from '../ListItem';
import ListHead from "../ListHead";
import { useGlobalContext } from "../../utils/GlobalState";
import SearchBar from "../SearchBar";



const ListView = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const sortList = (list) => {


        let newList = [...list];
        const {sortBy, sortDirection} = globalState;


        const algorithmAlphabetical = (a, b) => {
            if( a.name[sortBy] < b.name[sortBy]){
                return -1;
            }
            if( b.name[sortBy] < a.name[sortBy]){
                return 1;
            }
            return 0;
        }

        newList.sort(algorithmAlphabetical)

        newList = sortDirection ? newList : newList.reverse();

        return newList;
    }

    let employeeList = [...globalState.employees]

    employeeList = sortList(employeeList);


return (
    <div>
        <SearchBar />

        <table className='w-full'>
            <ListHead sortBy={globalState.sortBy} sortDirection={globalState.sortDirection} dispatch={dispatch}/>
            <tbody>
                {employeeList.map(employee => {
                    if(employee.name.first.toLowerCase().includes(globalState.search.toLowerCase())
                    ||employee.name.last.toLowerCase().includes(globalState.search.toLowerCase())){
                        return (
                        <ListItem employee={employee} key={employee.email}/>
                        )
                    }else{return null}
                })}
            </tbody>
        </table>
    </div>
)
}

export default ListView;