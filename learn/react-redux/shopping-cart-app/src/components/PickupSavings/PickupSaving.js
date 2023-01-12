import React from 'react';

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

let styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}

export default class PickupSaving extends React.Component {
    render() {
        const tooltip = (            
            <Tooltip id="tooltip">
                <p>Picking up your order in the store helps cut costs, and we pass the savings on to you</p>
            </Tooltip>
        )
        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickuoSavings}>
                            Pickup Savings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        )
    }
}