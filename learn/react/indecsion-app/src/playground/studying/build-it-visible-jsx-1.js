let visibility = false

const showHide = () => {
    visibility = !visibility
    render();
}

const render = () => {

    const building = (
        <div>
            <h1>Build It Visible</h1>
            <button onClick={showHide}>
                {
                    visibility ? 'Show details' : 'Hide details'
                }
            </button>
            {
                visibility && <p>These are details that you can see now!</p>
            }
        </div>
    )

    ReactDOM.render(building, document.querySelector('#app'));
}

render();