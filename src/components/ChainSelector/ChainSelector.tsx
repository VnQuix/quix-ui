import React, { useEffect } from 'react'

import Select from "react-select"
import useChainData from 'hooks/useChainData'
import useWallet from 'hooks/useWallet'
import { POLYGON_CHAIN_DATA } from 'utils/connectors'

const ChainSelector: React.FC = () => {
    const { chain, setMainnet, setPolygon } = useChainData()
    const { chainId } = useWallet()

    useEffect(() => {
        if (chainId) {
            if (chainId === POLYGON_CHAIN_DATA.chainId) setPolygon()
            else setMainnet()
        }
    }, [chainId, setMainnet, setPolygon])

    const styles = {
        control: (styles: any) => ({
            ...styles,
            width: 135,
            background: `rgba(0, 0, 0, 0.4)`,
            padding: 7,
            border: 'none',
            borderRadius: 14,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: 'whitesmoke',
            fontWeight: 600,
            fontSize: 16,
            width: 130,
            textAlign: 'left',
        }),
        menu: (styles: any) => ({
            ...styles,
            color: 'black',
        }),
        dropdownIndicator: (styles: any) => ({
            ...styles,
            'color': 'whitesmoke',
            'cursor': 'pointer',
            '&:hover': {
                color: 'whitesmoke',
            },
        }),
        indicatorSeparator: () => ({}),
        indicatorContainer: (styles: any) => ({
            ...styles,
            marginLeft: 0,
            padding: 0,
        }),
    }

    return (
        <Select
            isSearchable={false}
            value={{ label: chain.name } as any}
            onChange={(chain) => {
                if (chain.value === 'polygon') setPolygon()
                else setMainnet()
            }}
            options={[
                {
                    value: 'ethereum',
                    label: 'Ethereum',
                },
                {
                    value: 'polygon',
                    label: 'Polygon',
                },
            ]}
            styles={styles}
        />
    )
}

export default ChainSelector