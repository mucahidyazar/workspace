import React from 'react';
import * as actionTypes from '../store/action';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.cntr}</h1>
                <button onClick={this.props.addOne}>ADD +1</button>
                <button onClick={this.props.addTen}>ADD +10</button>
                <button onClick={this.props.addTf}>ADD +25</button>
                <button onClick={this.props.reset}>RESET</button>
                <button onClick={this.props.minusOne}>MINUS -1</button>
                <button onClick={this.props.minusTen}>MINUS -10</button>
                <button onClick={this.props.minusTf}>MINUS -25</button>
            </div>
        )
    }
}

const mapStateToPromps = state => {
    return {
        cntr: state.count
    }
}

const mapStateToDispatch = dispatch => {
    return {
        addOne: () => dispatch({            
            type: actionTypes.ADD_ONE,
            addOne: 1
        }),
        addTen: () => dispatch({
            type: actionTypes.ADD_TEN,
            addTen: 10
        }),
        addTf: () => dispatch({
            type: actionTypes.ADD_TF,
            addTf: 25
        }),
        reset: () => dispatch({
            type: actionTypes.RESET
        }),
        minusOne: () => dispatch({
            type: actionTypes.MINUS_ONE,
            minusOne: 1
        }),
        minusTen: () => dispatch({
            type: actionTypes.MINUS_TEN,
            minusTen: 10
        }),
        minusTf: () => dispatch({
            type: actionTypes.MINUS_TF,
            minusTf: 25
        })
    }
}

export default connect(mapStateToPromps, mapStateToDispatch)(Counter);