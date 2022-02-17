import React from 'react'

import { Card, Modal, Button, Col, Container, Row } from "react-bootstrap"

interface WalletModalProps {
    isOpen: boolean
    onDismiss: () => void
}


const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onDismiss }) => {
    return (
        <Modal
            show={isOpen}
            onExit={onDismiss}
        >WalletModal</Modal>
    )
}

export default WalletModal