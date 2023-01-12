class BuildItVisible extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState(() => {
            return {
                visibility: !this.state.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Build It Visible App with React Composent</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility
                    &&
                    <p>Hey. These are some details you can now see</p>
                }
            </div>
        )
    }
}

ReactDOM.render(<BuildItVisible />, document.getElementById('app'));