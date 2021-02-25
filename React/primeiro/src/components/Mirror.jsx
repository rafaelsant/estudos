import React from 'react';
import {useCount} from '../context/Count'

function Mirror(props) {
    const { count }= useCount();
    return (
        <span>
            mirror: {count}
        </span>
    );
}

export default Mirror;