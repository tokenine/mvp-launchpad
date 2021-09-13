import { ChainId } from 'dfy-sdk'

export const NFT_AUCTION : { [key: string]: any } = {
  [ChainId.BSC]: {
    mev: '0x9b98646315CC7677CE02a3cCf580c80f36ACA4ff',
    mvp: '0x3379A0BdF5A5CB566127C421782686BA0f80490a',
  }
}

export const useMVPToMEV = (chainId?: ChainId) : any => {
  if (chainId === ChainId.BSC) return NFT_AUCTION[chainId]
  return undefined
}