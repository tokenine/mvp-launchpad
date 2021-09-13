import { ChainId } from 'dfy-sdk'

export const NFT_AUCTION : { [key: string]: any } = {
  [ChainId.BSC_TESTNET]: {
    auction: '0xbf7bc23CE0652F825e7Bc05917715351f649B613',
    nft: '0xE7a9C681eaa91747c69E6758354fa7e4ec60C0aF',
    token: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23'
  },
  [ChainId.MAINNET]: {
    auction: '0x2D1a4Bc32d24A9e840a77fc6972ad218c1E493B2',
    nft: '0x3cfC6162E5EB147F84Ca574d2D29560e963a5CAA',
    token: '0x3379a0bdf5a5cb566127c421782686ba0f80490a'
  }
}

export const useNFTAuction = (chainId?: ChainId) : any => {
  if (chainId === ChainId.BSC_TESTNET) return NFT_AUCTION[chainId]
  return undefined
}