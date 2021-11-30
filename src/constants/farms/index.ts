import { ChainId } from 'metaverse-sdk'
import BSC_TESTNET_FARM from './bscTestnet'

export const MINI_CHEF_V2_ADDRESS = '0x14958Ff10E3Ee1981bF9622B0B79913150e01B35'
// export const MASTER_CHEF_V1_ADDRESS = '0x52139921Fef4BFf872F76d65Cf237459c506cA7a'
export const MASTER_CHEF_V1_ADDRESS = '0xABe28Bb22d1Dc2FE1A2455eDBB477f9935Ec869A' // TKFarm

export const MASTER_CHEF_V2_ADDRESS = ''

const farms: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_FARM
}

export default farms