import React from 'react';

const Option = (props) => {
    return (
        <div>
            <span>{props.count}</span>
            <span>{props.option}</span>
            <button>Remove</button>
        </div>
    )
}

export default Option;