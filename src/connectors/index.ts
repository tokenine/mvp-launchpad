import { ChainId } from 'metaverse-sdk'
import { FortmaticConnector } from './Fortmatic'
import { InjectedConnector } from '@web3-react/injected-connector'
import { LatticeConnector } from '@web3-react/lattice-connector'
import { NetworkConnector } from './NetworkConnector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { Web3Provider } from '@ethersproject/providers'
// import { BscConnector } from '@binance-chain/bsc-connector'

const RPC = {
    [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/a1c5a0a1879a40f7ba284f7e9d799cc3',
    [ChainId.ROPSTEN]: 'https://ropsten.infura.io/v3/a1c5a0a1879a40f7ba284f7e9d799cc3',
    [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/a1c5a0a1879a40f7ba284f7e9d799cc3',
    [ChainId.GÖRLI]: 'https://goerli.infura.io/v3/a1c5a0a1879a40f7ba284f7e9d799cc3',
    [ChainId.KOVAN]: 'https://kovan.infura.io/v3/a1c5a0a1879a40f7ba284f7e9d799cc3',
    [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
    [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
    [ChainId.MATIC]: 'https://rpc-mainnet.maticvigil.com',
    //'https://matic-mainnet.chainstacklabs.com/',
    [ChainId.MATIC_TESTNET]: 'https://rpc-mumbai.matic.today',
    [ChainId.XDAI]: 'https://rpc.xdaichain.com',
    [ChainId.BKC]: 'https://rpc.bitkubchain.io',
    [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
    [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-2-s3.binance.org:8545',
    [ChainId.MOONBASE]: 'https://rpc.testnet.moonbeam.network',
    [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
    [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
    [ChainId.HECO]: 'https://http-mainnet.hecochain.com',
    [ChainId.HECO_TESTNET]: 'https://http-testnet.hecochain.com',
    [ChainId.HARMONY]: 'https://explorer.harmony.one',
    [ChainId.HARMONY_TESTNET]: 'https://explorer.pops.one',
    [ChainId.OKEX]: 'https://exchainrpc.okex.org',
    [ChainId.OKEX_TESTNET]: 'https://exchaintestrpc.okex.org',
    [ChainId.XCHAIN]: 'https://rpc.xchain.asia',
    [ChainId.META]: 'https://rpc.metachain.asia'
}

export const network = new NetworkConnector({
    defaultChainId: ChainId.META,
    urls: RPC
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
    return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
    supportedChainIds: [
        1, // mainnet
        3, // ropsten
        4, // rinkeby
        5, // goreli
        42, // kovan
        250, // fantom
        4002, // fantom testnet
        137, // matic
        80001, // matic testnet
        100, // xdai
        96, // bkc
        56, // binance smart chain
        97, // binance smart chain testnet
        1287, // moonbase
        43114, // avalanche
        43113, // fuji
        128, // heco
        256, // heco testnet
        1666600000, // harmony
        1666700000, // harmony testnet
        66, // okex testnet
        65, // okex testnet
        35, // X-Chain
        17
    ]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
    rpc: {
        [ChainId.MAINNET]: RPC[ChainId.MAINNET]
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 15000
})

// mainnet only
export const lattice = new LatticeConnector({
    chainId: 1,
    url: RPC[ChainId.MAINNET],
    appName: 'SushiSwap'
})

// mainnet only
export const fortmatic = new FortmaticConnector({
    apiKey: process.env.REACT_APP_FORTMATIC_API_KEY ?? '',
    chainId: 1
})

// mainnet only
export const portis = new PortisConnector({
    dAppId: process.env.REACT_APP_PORTIS_ID ?? '',
    networks: [1]
})

// mainnet only
export const walletlink = new WalletLinkConnector({
    url: RPC[ChainId.MAINNET],
    appName: 'SushiSwap',
    appLogoUrl: 'https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-256x256.png'
})

// mainnet only
export const torus = new TorusConnector({
    chainId: 1
})

// export const bsc = new BscConnector({ supportedChainIds: [56] })
