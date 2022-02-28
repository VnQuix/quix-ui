import React from 'react'

import SaveContext from './SaveContext'

const SaveContextProvider: React.FC = ({ children }) => {
    return (
        <SaveContext.Provider value={{}}>{children}</SaveContext.Provider>
    )
}

export default SaveContextProvider