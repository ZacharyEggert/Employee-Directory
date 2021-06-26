import React from "react";
import { useGlobalContext } from "../../utils/GlobalState";;


const ListItem = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    // console.log({globalStore, dispatch});

    const {employee} = props;

return (
    <tr>
        <td className=''><img className='mx-auto object-center rounded-full' alt='thumb' src={employee.picture.medium}/></td>
        <td>{employee.login.salt}</td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        <td>{employee.location.city + ', ' + employee.location.state + ', ' + employee.location.country}</td>
    </tr>
)
}

export default ListItem;