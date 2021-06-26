import React from "react";
import ListItem from '../ListItem';
import ListHead from "../ListHead";
import { useGlobalContext } from "../../utils/GlobalState";



const ListView = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    // console.log({globalStore, dispatch});

return (
    <div>
        <table className='w-full'>
            <ListHead/>
            <tbody>
                {globalStore.employees.map(employee => {
                    return (
                        <ListItem employee={employee} key={employee.email}/>
                    )
                })}
            </tbody>
        </table>
    </div>
)
}

export default ListView;