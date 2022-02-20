import React, { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'
import useBalances from 'hooks/useBalances'
import { stringConversion } from 'components/TokensCard/TokensCard'
import { currencyFormat } from 'components/InfoBar/InfoBar'
import useWallet from 'hooks/useWallet'

const NetWorthCard: React.FC = () => {
    const [netWorth, setnetWorth] = useState<number>(0)

    const { tokenBalances } = useBalances()
    const { account, ethereum } = useWallet()
    var balance: number = 0

    useEffect(() => {
        if (tokenBalances) {
            var i: number
            for (i = 0; i < tokenBalances.length; i++) {
                balance += Number(tokenBalances[i].priceUsd) * stringConversion(tokenBalances[i].balance)
            }
        }
        setnetWorth(balance)
        console.log(tokenBalances)
    }
        , [account, ethereum, tokenBalances, balance])



    return (
        <Card>
            <Card.Body>
                <h5><strong>Net Worth</strong></h5>
                <h5><strong>{currencyFormat(netWorth)}</strong></h5>
            </Card.Body>
        </Card>
    )
}



export default NetWorthCard