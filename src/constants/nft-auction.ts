import { ChainId } from 'metaverse-sdk'

export const NFT_AUCTION: { [key: string]: any } = {
    [ChainId.BSC]: {
        auction: '0x90c13F5D503bD8cbe1FD53879414A69C42915e73',
        nft: '0x3cfC6162E5EB147F84Ca574d2D29560e963a5CAA',
        token: '0x9b98646315cc7677ce02a3ccf580c80f36aca4ff'
    },
    [ChainId.META]: {
        auction: '0x52e109657e09936ee0BCcA9FDC50CC5ad5302710',
        nft: '0xFcB6b38B04e00E0138827dFc75131BDF4A53a2FE',
        token: '0x70173C556183F17D4CE9690D44b77F7a1D476929'
    }
}

export const useNFTAuction = (chainId?: ChainId): any => {
    if (chainId === ChainId.BSC || chainId === ChainId.META) return NFT_AUCTION[chainId]
    return undefined
}
