class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('option');
            const options = JSON.parse(json);
            
            if(options){            
                this.setState(()=>({ options }))
            }
        }catch(err){
            // Do nothing at all
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){            
            const json = JSON.stringify(this.state.options);3
            
            localStorage.setItem('option', json);
            console.log('saving data');            
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(option){
        console.log('hdo', option);
        this.setState((prevState) => ({
            options: prevState.options.filter((filteredOption)=>{
                return filteredOption !== option
            })
        }))
    }
    
    handlePick(){
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length <= 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}



//---REACT FUNCTIONAL COMPONENT
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

//---REACT FUNCTIONAL COMPONENT
const Action = (props) => {
    return (
        <div>
            <button 
                disabled={props.hasOptions} 
                onClick={props.handlePick}
            >
                    What should I do?
            </button>
        </div>
    )
}

//---REACT FUNCTIONAL COMPONENT
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {props.options.length <= 0 && <p>Please add an option to get started!</p> }
            <div>
                {
                    props.options.map((option) => 
                    (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />)
                    )
                }
            </div>
        </div>
    )
}

//---REACT FUNCTIONAL COMPONENT
const Option = (props) => {
    return (
        <div>
            Option : {props.optionText}
            <button 
                onClick = {(e) => (
                    props.handleDeleteOption(props.optionText)
                )}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
        
        if(!error){            
            e.target.elements.option.value = ''
        }
        
        
        
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));