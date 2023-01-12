import React, { Component } from 'react';
import { 
    Collapse, 
    Button, 
    Form, 
    Row, 
    Col, 
    FormGroup
} from 'react-bootstrap';


class PromoCodeDiscount extends Component {
    state = {
        open: false,
        value: ''
    }

    render() {
        return (
            <div>
                <a href="#"
                 className="promo-code-button"
                 onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? 'Apply' : 'Hide'}
                    Promo Code
                    {this.state.open === false ? '+' : '-'}
                </a>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId="formInlineName">
                                        <Form.Label>Promo Code</Form.Label>
                                        <Form.Control
                                        type="text"
                                        placeholder="Enter promo code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange} />
                                    </FormGroup>
                                    <Button
                                    block
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount} >
                                        Apply
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}



export default PromoCodeDiscount;