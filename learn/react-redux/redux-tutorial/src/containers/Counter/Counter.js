import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter( 'dec' )}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter( 'add', 5 )}  />
                <CounterControl label="Subtract 15" clicked={() => this.props.onSubtractCounter( 'sub', 5 )}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.rslts.map(rslt => (
                            <li key={rslt.id} onClick={() => this.props.onDeleteResult(rslt.id)}>
                                {rslt.value}
                            </li>
                        ))                    
                    }
                </ul>
            </div>
        );
    }
}

//Connect bir Higher order Component dir.
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        rslts: state.rslts.results
    }
}

//Butonlarla buradan dispatch verebilmek icin bir degisken olusturup bunun argumanini dispatch yaparak acariz,
//Bu fonksiyon return yapmasi gerekmektedir. Icine istedigimiz add bir obje elemani yazariz. Ve buda : dispatch({}) 'i alir ve icinde bir obje donderir. Ve icinde type belirtiriz.
//Ve bu fonksiyonda connect icine eklenir. state gibi dispatch ide cekmis oluruz boylelikle.
//Eger state ihtiyaciniz olmaz dispatch e ihtiyaciniz olrusa, state yerine null yazip daha sorna dispatch i ekleyebilirsiniz connect icine
//daha sonra bunlari this.props.onIncrementCounter seklinde kullanabiliriz.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            val: 10
        }),
        //type asla degismez fakat 2. 3. 4. yani istedigimiz kadar val payload value gibi degerler verip onlari action ile yakalayabiliriz reducer 'da boylece dynamic veriler yakalamis oluruz.
        onSubtractCounter: () => dispatch({
            type: actionTypes.SUBTRACT,
            val: 15
        }),
        onStoreResult: (result) => dispatch({
            type: actionTypes.STORE_RESULT,
            result: result
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            resultId: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);