import { ChainId } from '@sushiswap/sdk'
import BSC_TESTNET_FARM from './bscTestnet'

const farms: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_FARM
}

export default farms