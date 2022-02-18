import React from 'react'
import TokenDataContext from './TokenDataContext'

//usePrices
//tokenList
//get all the prices
//convert to props

const TokenDataContextProvider: React.FC = ({ children }) => {

    return (
        <TokenDataContext.Provider
            value={{
            }}
        >
            {children}
        </TokenDataContext.Provider>
    )
}


export default TokenDataContextProvider