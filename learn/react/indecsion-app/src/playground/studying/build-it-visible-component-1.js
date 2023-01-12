class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.showHide = this.showHide.bind(this);
        this.state = {
            visible: false
        }
    }

    showHide(){
        this.setState((prevState)=>{
            return {
                visible: !prevState.visible
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Build It Visible</h1>
                <button onClick={this.showHide}>
                    {this.state.visible ? 'Show details' : 'Hide details'}
                </button>
                {
                    this.state.visible && <p>These are some details you can see now!</p>
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));