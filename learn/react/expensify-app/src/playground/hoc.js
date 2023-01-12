//Higher Order Component (HOR)
//A Component (HOC) that renders another component (Regular Basit Component)

//HOC 'in Hedefi Amaci
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin && <p>This is private info. Please don't share</p>
            }
            <WrappedComponent {...props} />
        </div>
    )
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login</p>
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//info props 'unu  {...props} ile WrappedComponent 'da yakaladik.
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAdmin={false} isAuthenticated={true} info="These are the details" />, document.getElementById('app'));