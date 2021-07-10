import { ChainId } from 'dfy-sdk'

const BSC_TESTNET_TOKEN_LIST: { [key: string]:  any } = {
}

export const tokenStakeListByChainId: { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_TOKEN_LIST,
}