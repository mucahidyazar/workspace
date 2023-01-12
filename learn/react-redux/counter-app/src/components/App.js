import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {

    state = {
        counters: [{id: 0, count:0}]
    }

    newCounter = () => this.setState((prevState) => ({ counters: [...prevState.counters, { id: prevState.counters.length, count: 0 } ] }));

    handleDecrease = (index) => {
        this.setState(({ counters: this.state.counters.map((counter) => (counter.id === index ? {...counter, key:counter.id, count: counter.count - 1} : counter))   }))
    }

    handleIncrease = (index) => {
        this.setState(({ counters: this.state.counters.map((counter) => (counter.id === index ? {...counter, key:counter.id, count: counter.count + 1} : counter))   }))
    }

    handleReset = (index) => {
        this.setState(({ counters: this.state.counters.map((counter) => (counter.id === index ? {...counter, key:counter.id, count: 0} : counter))   }))
    }

    handleRemove = (index) => {
        const newCounters = this.state.counters.filter( (counter) => (
            counter.id !== index
        ))
        this.setState({counters: newCounters})
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map((counter, index) => (
                        <Counter 
                            key={index} 
                            count={counter.count} 
                            id={counter.id}
                            handleDecrease={this.handleDecrease}
                            handleIncrease={this.handleIncrease}
                            handleReset={this.handleReset}
                            handleRemove={this.handleRemove} />
                    ))
                }
                <div className="new-counter"
                onClick={this.newCounter} >
                    New Counter
                </div>
            </div>
        );
    }
}

export default App;
