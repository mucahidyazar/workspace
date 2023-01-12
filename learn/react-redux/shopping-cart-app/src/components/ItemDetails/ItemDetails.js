import React, { Component } from 'react';
import { Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    state = {
        open: false
    }

    render() {
        return (
            <div>
                <a href='#'
                    className="item-details-button"
                    onClick={() => this.setState({open: !this.state.open})}>
                        {this.state.open === false ? `See` : `Hide`} item details
                        {this.state.open === false ? `+` : `-`}
                </a>
                <Collapse in={this.state.open}>
                        <Media>
                            <Media.Body>
                                <img 
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://www.ikea.com/gb/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=s"
                                />
                            </Media.Body>
                            <Media.Body>
                                <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair</p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br/>
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty: 1
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                </Collapse>
            </div>
        )
    }
}