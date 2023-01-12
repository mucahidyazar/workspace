class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Counter App</h1>
                <h2>Count : </h2>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));