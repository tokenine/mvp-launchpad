import Arbitrum from '../assets/networks/arbitrum-network.jpg'
import Avalanche from '../assets/networks/avalanche-network.jpg'
import Bkc from '../assets/networks/bkc-network.jpg'
import Bsc from '../assets/networks/bsc-network.jpg'
import { ChainId } from 'metaverse-sdk'
import Fantom from '../assets/networks/fantom-network.jpg'
import Goerli from '../assets/networks/goerli-network.jpg'
import Harmony from '../assets/networks/harmonyone-network.jpg'
import Heco from '../assets/networks/heco-network.jpg'
import Kovan from '../assets/networks/kovan-network.jpg'
import Mainnet from '../assets/networks/mainnet-network.jpg'
import Matic from '../assets/networks/matic-network.jpg'
import Moonbeam from '../assets/networks/moonbeam-network.jpg'
import OKEx from '../assets/networks/okex-network.jpg'
import Polygon from '../assets/networks/polygon-network.jpg'
import Rinkeby from '../assets/networks/rinkeby-network.jpg'
import Ropsten from '../assets/networks/ropsten-network.jpg'
import xDai from '../assets/networks/xdai-network.jpg'
import XChain from '../assets/networks/xchain-280.png'
import MetaChain from '../assets/networks/meta-logo.png'

export const NETWORK_ICON = {
    [ChainId.MAINNET]: Mainnet,
    [ChainId.ROPSTEN]: Ropsten,
    [ChainId.RINKEBY]: Rinkeby,
    [ChainId.GÖRLI]: Goerli,
    [ChainId.KOVAN]: Kovan,
    [ChainId.FANTOM]: Fantom,
    [ChainId.FANTOM_TESTNET]: Fantom,
    [ChainId.BKC]: Bkc,
    [ChainId.BSC]: Bsc,
    [ChainId.BSC_TESTNET]: Bsc,
    [ChainId.MATIC]: Polygon,
    [ChainId.MATIC_TESTNET]: Matic,
    [ChainId.XDAI]: xDai,
    [ChainId.ARBITRUM]: Arbitrum,
    [ChainId.MOONBASE]: Moonbeam,
    [ChainId.AVALANCHE]: Avalanche,
    [ChainId.FUJI]: Avalanche,
    [ChainId.HECO]: Heco,
    [ChainId.HECO_TESTNET]: Heco,
    [ChainId.HARMONY]: Harmony,
    [ChainId.HARMONY_TESTNET]: Harmony,
    [ChainId.OKEX]: OKEx,
    [ChainId.OKEX_TESTNET]: OKEx,
    [ChainId.XCHAIN]: XChain,
    [ChainId.META]: MetaChain
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: 'Ethereum',
    [ChainId.RINKEBY]: 'Rinkeby',
    [ChainId.ROPSTEN]: 'Ropsten',
    [ChainId.GÖRLI]: 'Görli',
    [ChainId.KOVAN]: 'Kovan',
    [ChainId.FANTOM]: 'Fantom',
    [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
    [ChainId.MATIC]: 'Polygon (Matic)',
    [ChainId.MATIC_TESTNET]: 'Matic Testnet',
    [ChainId.XDAI]: 'xDai',
    [ChainId.BKC]: 'Bitkub Chain',
    [ChainId.BSC]: 'BSC',
    [ChainId.BSC_TESTNET]: 'BSC Testnet',
    [ChainId.MOONBASE]: 'Moonbase',
    [ChainId.AVALANCHE]: 'Avalanche',
    [ChainId.FUJI]: 'Fuji',
    [ChainId.HECO]: 'HECO',
    [ChainId.HECO_TESTNET]: 'HECO Testnet',
    [ChainId.HARMONY]: 'Harmony',
    [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
    [ChainId.OKEX]: 'OKExChain',
    [ChainId.OKEX_TESTNET]: 'OKExChain',
    [ChainId.XCHAIN]: 'X-Chain',
    [ChainId.META]: 'MetaChain'
}
