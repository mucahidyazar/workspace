import React from 'react';

//---REACT FUNCTIONAL COMPONENT
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count} {props.optionText}</p>
        <button 
            onClick = {(e) => (
                props.handleDeleteOption(props.optionText)
            )}
            className="button button--link"
        >
            Remove
        </button>
    </div>
)

export default Option;
//export default (props) => {
//Bu sekilde export etmememizin nedeni, eger edersek Options Componentinin altinda isimsiz import ettigimiz icin Unknown component olarak gozukecegidir. O yuzden isimle import etmek onemli. Cok zararli degil ama bu kullanissiz yapar developer toolumuzu ve kotu gozukur.