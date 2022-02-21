import React from 'react'

import ChainDataContext from './ChainDataContext'

const ChainDataContextProvider: React.FC = ({ children }) => {
    return (
        <ChainDataContext.Provider
            value={{}}
        >
            {children}
        </ChainDataContext.Provider>
    )
}

export default ChainDataContextProvider