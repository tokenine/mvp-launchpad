import { ChainId } from 'dfy-sdk'

export const NFT_AUCTION : { [key: string]: any } = {
  [ChainId.BSC]: {
    auction: '0x2D1a4Bc32d24A9e840a77fc6972ad218c1E493B2',
    nft: '0x3cfC6162E5EB147F84Ca574d2D29560e963a5CAA',
    token: '0x3379a0bdf5a5cb566127c421782686ba0f80490a'
  }
}



export const useNFTAuction = (chainId?: ChainId) : any => {
  if (chainId === ChainId.BSC) return NFT_AUCTION[chainId]
  return undefined
}