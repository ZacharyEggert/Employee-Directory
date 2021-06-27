import React from "react";
import { useGlobalContext } from "../../utils/GlobalState";;


const ListItem = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    // console.log({globalStore, dispatch});

    const {employee} = props;

return (
    <tr>
        <td className='py-4'><img className='object-center mx-auto rounded-full' alt='thumb' src={employee.picture.medium}/></td>
        <td className='py-4'>{employee.login.salt}</td>
        <td className='py-4'>{employee.name.first}</td>
        <td className='py-4'>{employee.name.last}</td>
        <td className='py-4'>{employee.email}</td>
        <td className='py-4'>{employee.location.city + ', ' + employee.location.state + ', ' + employee.location.country}</td>
    </tr>
)
}

export default ListItem;