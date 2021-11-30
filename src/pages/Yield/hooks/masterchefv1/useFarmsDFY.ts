import { exchange, masterchef } from 'apollo/client'
import { liquidityPositionSubsetQuery, pairSubsetQuery, poolsQuery } from 'apollo/queries'
import { useCallback, useEffect, useState } from 'react'

// import { POOL_DENY } from '../../../../constants'
// import { getAverageBlockTime } from 'apollo/getAverageBlockTime'
import _ from 'lodash'
// import orderBy from 'lodash/orderBy'
//import range from 'lodash/range'
// import sushiData from '@sushiswap/sushi-data'

import { useActiveWeb3React } from '../../../../hooks/useActiveWeb3React'
// import { ChainId } from 'metaverse-sdk'

import FARMS from '../../../../constants/farms'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFarms = () => {
    const { account, chainId } = useActiveWeb3React()
    const [farms, setFarms] = useState<any | undefined>()
    
    useEffect(() => {
        // for the future to fetch value
        const fetchConfigFrams = async () => {
            if (!chainId) return []
            const framsRAW = FARMS[chainId]
            if (!framsRAW) return [] 
            const frams = Object.values(framsRAW).map((item: any) => {
                item.tvl = 0
                item.roiPerYear = 0
                item.dfyRewardPerDay = 0
                item.lpBalance = '0'
                return item
            })
            return frams
        }
        const fetchFarms = async () => {
            const frams = await fetchConfigFrams()
            setFarms(frams)
        }
        fetchFarms()
    }, [account, chainId])

    return farms
}

export default useFarms
