import React from 'react';

const Action = (props) => (
    <div>
        <button onClick={props.getTodo}>What should I do?</button>
    </div>
);

export default Action;