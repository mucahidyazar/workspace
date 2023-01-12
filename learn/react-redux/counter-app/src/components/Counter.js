import React from 'react';
import './Counter.css';

class Counter extends React.Component {

  render() {
    return (
      <div className="Counter">
        <div className="main">
          <div className="screen">{this.props.count}</div>
          <div className="decrease" onClick={() => this.props.handleDecrease(this.props.id)}>
            <span>-</span>
          </div>
          <div className="increase" onClick={() => this.props.handleIncrease(this.props.id)}>
            <span>+</span>
          </div>
          <div className="reset" onClick={() => this.props.handleReset(this.props.id)}>
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="remove" onClick={() => this.props.handleRemove(this.props.id)}></div>
        </div>
      </div>
    );
  }
}

export default Counter;
