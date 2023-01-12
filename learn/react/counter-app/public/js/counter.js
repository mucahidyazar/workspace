// const Count = require('../../models/Count');
// let count;
// const countFinder = () => {
//     Count.findById('5e008f71839c6e5d7c02250f', (countInDB)=>{
//         count = countInDB.count;
//     });
// }
// countFinder();

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.addFive = this.addFive.bind(this);
        this.addTen = this.addTen.bind(this);
        this.reset = this.reset.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.minusFive = this.minusFive.bind(this);
        this.minusTen = this.minusTen.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const countString = localStorage.getItem('count');
        const count = parseInt(countString, 10);
        this.setState((prevState) => ({ count }));
    }

    componentDidUpdate(prevProps, prevState) {
        const count = this.state.count
        localStorage.setItem('count', count);
    }

    addOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    addFive(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 5
            }
        });
    }

    addTen(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 10
            }
        })
    }

    reset(){
        this.setState((prevState) => {
            return { count: 0 }
        });
    }

    minusOne(){
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    minusFive(){
        this.setState((prevState) => ({ count: prevState.count - 5 }));
    }

    minusTen(){
        this.setState(( prevState => ({ count: prevState.count - 10 })));
    }

    render(){
        return (
            <div>
                <h1>Counter App</h1>
                <h2>Count : {this.state.count}</h2>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.addFive}>+5</button>
                <button onClick={this.addTen}>+10</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.minusFive}>-5</button>
                <button onClick={this.minusTen}>-10</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));