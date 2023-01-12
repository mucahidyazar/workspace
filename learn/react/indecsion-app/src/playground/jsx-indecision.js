const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    //Formun elemanlari input ve button'a erisir. Ve namelere erisir yani . koyarak herhangi bir name icerigini yani asagiya gore ornek verecek olursak option yazdigimizda name'i option olan elemani secer yani input'a erisiriz.
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIndecisionApp();
}

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    //Bize 0 ve 1 arasinda ondalikli rakamlar verir. Ornek = 0.32173565331818789 gibi. Bu rakam 0 olabilir ama 1 asla olmaz.
    // const randomNum = Math.random();
    //Math.floor ise surekli ondalik kismi asagiya yukarlar. 4.9 sa 4 dur. Math.ceil =Yukari yuvarlar. Math.round .5 ve ustu yukari, altini ise asagi yuvarlar.
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderIndecisionApp = () => {

    const template = (
        <div>
            <h4>{app.title}</h4> 
            { ( app.subtitle && <p>{app.subtitle}</p> ) }
            <p>{ app.options.length > 1 ? 'Here are your options' : 'No options' }</p>
            <button disabled={app.options.length === 0 ? true : false} onClick={onMakeDecision} >What should I do?</button>
            <ol>
            {
                app.options.map( (option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
                <button onClick={removeAll} >Remove All</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot);

}
renderIndecisionApp();