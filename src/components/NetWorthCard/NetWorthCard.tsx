import React from 'react'
import { Card } from 'react-bootstrap'

const NetWorthCard: React.FC = () => {
    return (
        <Card>
            <Card.Body>
                <h5><strong>Net Worth</strong></h5>
                <h5>$0.00</h5>
            </Card.Body>
        </Card>
    )
}



export default NetWorthCard