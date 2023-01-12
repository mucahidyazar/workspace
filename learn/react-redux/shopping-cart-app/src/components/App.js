import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Subtotal from './Subtotal/Subtotal';
import PickupSavings from './PickupSavings/PickupSaving';
import TaxesFees from './TaxesFees/TaxesFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import ItemDetails from './ItemDetails/ItemDetails';
import PromoCodeDiscount from './PromoCode/PromoCode';

import { PROMO_CODE } from '../actions/promoCodeActions';

import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        total: 100,
        PickupSavings: -3.85,
        taxes: 0,
        estimatedTotal: 0,
        disablePromoButton: false
    }

    componentDidMount = () => {
        this.setState({
            taxes: (this.state.total + this.state.PickupSavings) * 0.0875
        },
        function () {
            this.setState({
                estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
            })
        }
        )
    }

    giveDiscountHandler = (promo, dispatch) => {
        dispatch(() => PROMO_CODE())
        this.setState({estimatedTotal: this.state.estimatedTotal - 10})
    }
    
    render() {
        return (
            <div className="container">
                <Container className="purchase-card">
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.PickupSavings} />
                    <TaxesFees taxes={this.state.taxes.toFixed(2)} />
                    <hr/>
                    <EstimatedTotal price={this.state.estimatedTotal} />
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                    <hr/>
                    <PromoCodeDiscount 
                        giveDiscount={ () => this.giveDiscountHandler(this.props.main.promo, this.props.dispatch) } 
                        isDisabled={this.state.disablePromoButton}
                    />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        main: state.main
    }
}

export default connect(mapStateToProps)(App);

//toFixed kusurat . noktasindan sorna kac sayi gosterilecegini belirtir.