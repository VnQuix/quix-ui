import React from 'react'

import styled from 'styled-components'

import useTransactionWatcher from 'hooks/useTransactionWatcher'
import useWallet from 'hooks/useWallet'
import { makeEtherscanLink } from 'utils'
import { TransactionStatusType } from 'contexts/TransactionWatcher'
import { Button } from 'react-bootstrap'

const CompletedTransaction: React.FC = () => {
  const { transactionId, onSetTransactionId, onSetTransactionStatus } = useTransactionWatcher()
  const { chainId } = useWallet()

  const etherscanLink = transactionId && makeEtherscanLink(transactionId, chainId)

  const onFinishTransaction = () => {
    onSetTransactionId()
    onSetTransactionStatus(TransactionStatusType.IS_UNSTARTED)
  }

  return (
    <StyledCard>
      <StyledCardBody>Your transaction succeeded!</StyledCardBody>
      <a href={etherscanLink}>View the transaction{'  '}</a>
      <Button onClick={onFinishTransaction}>Finish</Button>
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

export default CompletedTransaction