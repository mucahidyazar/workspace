import React from 'react';
import './Burger.style.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    //Gelen ingredient objesini bir arraye ceviriyoruz. Objenin sadece tanimlamalarini aliyor yani salad: 2 ise sadece salad'i alip arraye koyuyor. 2 gibi saladin karsisinda tanimlanmis degerleri almiyor.
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        }) //Reduce 2 argument alir. 1.si PreviousValue 2. si CurrentValue
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [] )
    console.log(transformedIngredient);

    if(transformedIngredient.length === 0) {
        transformedIngredient = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;