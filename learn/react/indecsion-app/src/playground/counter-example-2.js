class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            //name: 'Mucahid Yazar',
            //age: 28
        };
    }

    handleAddOne(){
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        //Yukaridaki gibi yaptigimizda this.state.count degisir ama render etmedigi icin sayfada gorulmez. Bunun icin setState kullanmamiz gerekiyor.
        //setState state object i manipulate etmemize yariyor. Icinde bir adet fonksiyon oluyor ve bu fonksiyon bir object donduruyor.
        //setState icindeki fonksiyonun degiskeni prevState bizim degistirilmeden onceki state objemizdir.
        //Eger birden fazla state icinde degerimiz varsa hepsini degistirmek zorunda degiliz istedigimizi degistirip istedigimize dokunmayabiliriz.
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })

        //Buda alternatif bir setState yontemidir. Fakat bu cok efektif bir yontem degildir.
        //Eger bu yontemle uste sifirlama olsaydi ve bu event her calistiginda 1 artmaya devam ederdi. 0 lama yapmazdi. Cunku this.state.count her defasinda eski degeri alirdi. Fakat fonksiyonlu yontemle aynisi yani hem sifirlama hem artirma olsaydi ilk once 0 lanir daha sonra 1 artar ve ekranda 1 gosterirdi. click eventi her calistiginda bu olrudu ve asla 1 den fazla artmazdi.
        // this.setState({
        //     count: this.state.count +1
        // })
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));