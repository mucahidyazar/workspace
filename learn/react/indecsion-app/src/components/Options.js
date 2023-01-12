import React from 'react';

//---REACT FUNCTIONAL COMPONENT
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className='button button--link'
                onClick={props.handleDeleteOptions} 
            >
                Remove All
            </button>        
        </div>
        <div className="widget__message">            
            {props.options.length <= 0 && <p>Please add an option to get started!</p> }
        </div>
        <div>
            {
                props.options.map((option, index) => 
                (
                    <Option 
                        key={option} 
                        optionText={option} 
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                )
            }
        </div>
    </div>
)

export default Options;