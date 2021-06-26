import React, { useEffect } from 'react';
import ListView from '../ListView';
import EmployeeView from '../EmployeeView';
import { useGlobalContext } from '../../utils/GlobalState';

// eslint-disable-next-line no-unused-vars
import {getRandomEmployee, getRandomEmployeeSet} from '../../utils/API';

const Frame = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    // console.log({globalStore, dispatch});


    useEffect(() => {
        getRandomEmployeeSet().then(data => {dispatch({type:'addEmployeeBulk', data})})
    }, [dispatch])

    // const logStore = () => {
    //     console.log(globalStore);
    // }


return (
    <div>
        <ListView />
        <EmployeeView />
    </div>
)
}

export default Frame;