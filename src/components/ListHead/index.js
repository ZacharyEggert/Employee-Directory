import React from "react";

const ListHead = () => {

    return(
        <thead>
            <tr>
                <th scope='col' className='w-1/6'>Photo</th>
                <th scope='col' className='w-1/12'>#ID</th>
                <th scope='col' className='w-1/6'>First Name</th>
                <th scope='col' className='w-1/6'>Last Name</th>
                <th scope='col' className='w-1/6'>Email</th>
                <th scope='col' className='w-1/6'>Location</th>
            
            </tr>
        </thead>     
    )
}

export default ListHead