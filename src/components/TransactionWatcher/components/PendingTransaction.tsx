import React from 'react'

import styled from 'styled-components'

import useTransactionWatcher from 'hooks/useTransactionWatcher'
import useWallet from 'hooks/useWallet'
import { makeEtherscanLink } from 'utils'
import MoonLoader from 'react-spinners/MoonLoader'

const PendingTransaction: React.FC = () => {
  const { transactionId } = useTransactionWatcher()
  const { chainId } = useWallet()

  const etherscanLink = transactionId && makeEtherscanLink(transactionId, chainId)

  return (
    <StyledCard>
      <MoonLoader size={30} />
      <StyledCardBody>Your transaction is pending</StyledCardBody>
      <a href={etherscanLink}>View the transaction{'  '}</a>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const StyledCardBody = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`

export default PendingTransaction