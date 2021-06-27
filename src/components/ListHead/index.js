import React from "react";

const ListHead = (props) => {

    const {sortBy, sortDirection, dispatch} = props

    const sortArrow = () => {
        if (sortDirection ) {
            return <span>&nbsp;▲</span>
        } else {
            return <span>&nbsp;▼</span>
        }
    }

    const handleClick  = (event) => {
        if (event.target.attributes.name.value === sortBy){
            dispatch({type: 'toggleSortDirection'})
        }else{
            if(!sortDirection){
                dispatch({type: 'toggleSortDirection'});
            }
            dispatch({type: 'sortBy', data:event.target.attributes.name.value})
        }
    }

    return(
        <thead>
            <tr className=''>
                <th scope='col' className='w-1/6 pt-4 pb-4 bg-gray-100'>Photo</th>

                <th scope='col' className='w-1/12 pt-4 pb-4 bg-gray-100'>#ID</th>

                <th scope='col' className='w-1/6 pt-4 pb-4 bg-gray-100' name='first' onClick={handleClick}>
                    First Name
                    {sortBy==='first' ? (
                        sortArrow()
                    ) : null}
                </th>

                <th scope='col' className='w-1/6 pt-4 pb-4 bg-gray-100' name='last' onClick={handleClick}>
                    Last Name
                    {sortBy==='first' ? null : (
                        sortArrow()
                    )}
                </th>

                <th scope='col' className='w-1/6 pt-4 pb-4 bg-gray-100'>Email</th>

                <th scope='col' className='w-1/6 pt-4 pb-4 bg-gray-100'>Location</th>
            
            </tr>
        </thead>     
    )
}

export default ListHead