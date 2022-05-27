import React from 'react';
import './Link.scss';



function LinkContact(props) {

    return (
        <a href='/' className='nav_link'>
            { props.name }
        </a>
    )
}

export default LinkContact;