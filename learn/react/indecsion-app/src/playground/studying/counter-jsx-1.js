let count = 0

const addOne = () => {
    count++;
    render();
}

const addFive = () => {
    count += 5;
    render();
}

const addTen = () => {
    count += 10;
    render();
}

const minusOne = () => {
    count --;
    render();
}

const minusFive = () => {
    count -= 5;
    render();
}

const minusTen = () => {
    count -= 10;
    render();
}

const reset = () => {
    count = 0;
    render();
}

const render = () => {

    const Counter = (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={addFive}>+5</button>
            <button onClick={addTen}>+10</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={minusFive}>-5</button>
            <button onClick={minusTen}>-10</button>
        </div>
    )

    ReactDOM.render(Counter, document.getElementById('app'));
}

render();