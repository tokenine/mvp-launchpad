import { exchange, masterchef } from 'apollo/client'
import { liquidityPositionSubsetQuery, pairSubsetQuery, poolsQuery } from 'apollo/queries'
import { useCallback, useEffect, useState } from 'react'

import { POOL_DENY } from '../../../../constants'
import { getAverageBlockTime } from 'apollo/getAverageBlockTime'
import _ from 'lodash'
import orderBy from 'lodash/orderBy'
//import range from 'lodash/range'
import sushiData from '@sushiswap/sushi-data'

import { useActiveWeb3React } from '../../../../hooks/useActiveWeb3React'
import { ChainId } from '@sushiswap/sdk'

import FARMS from '../../../../constants/farms'

// Todo: Rewrite in terms of web3 as opposed to subgraph
const useFarms = () => {
    const { account, chainId } = useActiveWeb3React()
    const [farms, setFarms] = useState<any | undefined>()

    // for the future to fetch value
    const fetchConfigFrams = async () => {
        if (!chainId) return []
        const framsRAW = FARMS[chainId]
        if (!framsRAW) return [] 
        const frams = Object.values(framsRAW).map((item: any) => {
            item.tvl = 1000000
            item.roiPerYear = 1
            item.dfyRewardPerDay = 100000
            item.lpBalance = '100000000000000000000000'
            return item
        })
        return frams
    }
    
    useEffect(() => {
        const fetchFarms = async () => {
            const frams = await fetchConfigFrams()
            setFarms(frams)
        }
        fetchFarms()
    }, [account, chainId])

    return farms
}

export default useFarms
