import React from 'react'

import styled from 'styled-components'
import MoonLoader from "react-spinners/MoonLoader"


interface ApprovingTransactionProps {
    onDismiss?: (...args: any[]) => any
}

const ApprovingTransaction: React.FC<ApprovingTransactionProps> = ({ onDismiss }) => {
    return (
        <StyledCard>
            <MoonLoader size={30} />
            <StyledCardBody>Please confirm your transaction</StyledCardBody>
        </StyledCard>
    )
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const StyledCardBody = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`

export default ApprovingTransaction