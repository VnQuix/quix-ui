import React from 'react'

import styled from 'styled-components'

const Dashboard: React.FC = () => {
    return (
        <div>
            <StyledTitle>Home</StyledTitle>
            <hr />
        </div>
    )
}

const StyledTitle = styled.h4`
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
`

export default Dashboard