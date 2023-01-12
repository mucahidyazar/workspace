let count = 5;

//Asagidaki sekilde bir string degiskeni olusturup JSX icinde id olarak kullanabiliriz.
const someId = 'myidhere';

const addOne = () => {
    count++;
    renderCounterApp();
}
//Buttonu ister asagidaki gibi istersek bir alt satirdaki gibi kullanabiliriz.
//<button onClick={()=> console.log('Basildi')} id={someId} className="button">+1</button>

const minusOne = () => {
    count = count-1;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}




//Normalde renderCounterApp yoktu icindeki hepsi ana root daydi. Fakat bunlari bir fonksiyona aldim ve yukarida azaltma ve cikartma islemlerinde butona her tiklandiginda sayfa yenileme islemini yani render islemini yeniden calistirabilmeleri icin bir fonksiyon kzandirmis oldum. Boylece sayiyi arttirdiktan sonra render oldugu icin sayinin degisikligi sayfada gorunecek. Ve fonksiyonu eger disarda bir kere cagirmazsak ilk basta hic render almayacagimiz icin hicbirseyi butonlari felan goremezdik. Onu unutmayalim.
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne} id={someId} className="button">+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    //Yukaridada gordugunuz uzere JSX dosyalari class desteklemez hata aliriz. JSX dosyalarimizda class lari className olarak tanimlariz.
    
    const appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();