import { ChainId } from 'metaverse-sdk'

export const NFT_AUCTION: { [key: string]: any } = {
    [ChainId.BSC]: {
        mev: '0x9b98646315CC7677CE02a3cCf580c80f36ACA4ff',
        mvp: '0x3379A0BdF5A5CB566127C421782686BA0f80490a'
    },
    [ChainId.META]: {
        mev: '0x70173C556183F17D4CE9690D44b77F7a1D476929',
        mvp: '0x9737e3Be617d482cFCF013358e1DEB188aB63E0B'
    }
}

export const useMVPToMEV = (chainId?: ChainId): any => {
    if (chainId === ChainId.BSC || chainId === ChainId.META) return NFT_AUCTION[chainId]
    return undefined
}
