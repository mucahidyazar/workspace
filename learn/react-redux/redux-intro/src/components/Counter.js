import React from 'react'
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>{props.counter}</h1>
        </div>
    );
}



//6. ASAMA
//State 'den veri cekmek icin
// react-redux 'dan connect i import ediyoruz.
//connect icine mapStateToProps fonksiyonumuzu yerlestiriyoruz ve bu fonksiyon default olarak icinde Counter component imiz olacak sekilde export default ile export ediliyor.
//Burada bir nevi map ile Counter 'in props larina state i bagliyoruz.
//counter i ise props olarak yani props.counter olarak kullanabiliriz Tabi once state 'den nereden geldigini yani hangi reducer 'dan geldigini once belirliyoruz asagidaki gibi
//Tabi bu ayni zamanda redux in direk olarak hangi reducer a bakacaginida ogretmis oluyor.

const mapStateToProps = (state, props) => {
    return {counter: state.counterRedecer}
}

export default connect(mapStateToProps)(Counter)