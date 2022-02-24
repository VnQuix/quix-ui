import React, { useEffect } from 'react'

import Select from "react-select"
import useChainData from 'hooks/useChainData'
import useWallet from 'hooks/useWallet'
import { POLYGON_CHAIN_DATA, RINKEBY_CHAIN_DATA, KOVAN_CHAIN_DATA, MAINNET_CHAIN_DATA } from 'utils/connectors'

const ChainSelector: React.FC = () => {
    const { chain, setMainnet, setPolygon, setRinkeby, setKovan, } = useChainData()
    const { chainId } = useWallet()

    useEffect(() => {
        if (chainId) {
            if (chainId === MAINNET_CHAIN_DATA.chainId) setMainnet()
            if (chainId === POLYGON_CHAIN_DATA.chainId) setPolygon()
            if (chainId === RINKEBY_CHAIN_DATA.chainId) setRinkeby()
            if (chainId === KOVAN_CHAIN_DATA.chainId) setKovan()

        }
    }, [chainId, setMainnet, setPolygon, setRinkeby, setKovan])

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
                if (chain.value === 'ethereum') setMainnet()
                if (chain.value === 'polygon') setPolygon()
                if (chain.value === 'rinkeby') setRinkeby()
                if (chain.value === 'kovan') setKovan()

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
                {
                    value: 'rinkeby',
                    label: 'Rinkeby',
                },
                {
                    value: 'kovan',
                    label: 'Kovan',
                },
            ]}
            styles={styles}
        />
    )
}

export default ChainSelector