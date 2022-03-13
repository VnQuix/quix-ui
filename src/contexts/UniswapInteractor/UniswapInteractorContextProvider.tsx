import React, { useCallback, useState, useEffect } from 'react'

import UniswapInteractorContext from './UniswapInteractorContext'
import { getContract } from 'utils/contractHelpers';
import { uniFactoryContractAddress } from 'constants/contractAddresses';
import useWallet from 'hooks/useWallet';
import { AbiItem } from "web3-utils";
import {
    abi as FactoryAbi,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import UniTokenPool, { UniLiquidityPool } from 'constants/UniTokens';

const UniswapInteractorContextProvider: React.FC = ({ children }) => {
    const [pool, setPool] = useState<UniLiquidityPool[]>([])
    const { ethereum, account, status } = useWallet()

    const uniFactory = getContract(
        ethereum,
        uniFactoryContractAddress,
        FactoryAbi as unknown as AbiItem
    )

    const fetchData = useCallback(() => {
        const PoolData = UniTokenPool.map(async (e) => {
            const data = await uniFactory.methods.getPool(e.token0.address, e.token1.address, e.APR).call()
            return convertToUniPoolData(e, JSON.stringify(data))
        })
        Promise.all(PoolData).then(setPool)
    }, [uniFactory.methods, setPool])

    useEffect(() => {
        if (status !== 'connected') {
            setPool([])
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            fetchData()
            let refreshInterval = setInterval(() => fetchData(), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, fetchData])

    return (
        <UniswapInteractorContext.Provider
            value={{
                pool
            }}
        >{children}</UniswapInteractorContext.Provider>
    )
}

function convertToUniPoolData(
    pool: UniLiquidityPool,
    poolAddress: string,
) {
    if (!poolAddress) {
        return pool
    } else {
        return {
            id: pool.id,
            token0: pool.token0,
            token1: pool.token1,
            address: poolAddress,
            tvl: pool.tvl,
            APR: pool.APR,
        }
    }

}

export default UniswapInteractorContextProvider