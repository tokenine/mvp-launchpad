import { ChainId } from 'metaverse-sdk'

export const NFT_AUCTION : { [key: string]: any } = {
  [ChainId.BSC]: {
    auction: '0x90c13F5D503bD8cbe1FD53879414A69C42915e73',
    nft: '0x3cfC6162E5EB147F84Ca574d2D29560e963a5CAA',
    token: '0x9b98646315cc7677ce02a3ccf580c80f36aca4ff'
  }
}



export const useNFTAuction = (chainId?: ChainId) : any => {
  if (chainId === ChainId.BSC) return NFT_AUCTION[chainId]
  return undefined
}