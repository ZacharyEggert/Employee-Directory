import React from 'react';

import { useGlobalContext } from '../../utils/GlobalState';

const SearchBar = () => {

    const [globalState, dispatch] = useGlobalContext();

    const handleSearch = (event) => {
        dispatch({type:'setSearch', data: event.target.value})
    }


    return (

        <div className='flex flex-row items-center content-center py-2'>
            <input className='flex-1 text-center' placeholder='Search' value={globalState.search} onChange={handleSearch}/>
        </div>

    )
}

export default SearchBar