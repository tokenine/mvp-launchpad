import { ChainId, Currency } from 'dfy-sdk'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo_white_full.png'
import { useActiveWeb3React } from '../hooks/useActiveWeb3React'
import { useETHBalances } from '../state/wallet/hooks'
import { ReactComponent as Burger } from '../assets/images/burger.svg'
import { ReactComponent as X } from '../assets/images/x.svg'
import Web3Network from './Web3Network'
import Web3Status from './Web3Status'
import Web3Faucet from './Web3Faucet'
import MoreMenu from './Menu'
import { ExternalLink, NavLink } from './Link'
import { Disclosure } from '@headlessui/react'
import { ANALYTICS_URL } from '../constants'
import QuestionHelper from './QuestionHelper'
import { t } from '@lingui/macro'
import LanguageSwitch from './LanguageSwitch'
import { useLingui } from '@lingui/react'
import mevTokenicon from '../assets/images/mev-circle.png'

function AppBar(): JSX.Element {
    const { i18n } = useLingui()
    const { account, chainId, library } = useActiveWeb3React()
    const { pathname } = useLocation()

    const [navClassList, setNavClassList] = useState(
        'w-screen bg-transparent gradiant-border-bottom z-10 backdrop-filter backdrop-blur'
    )

    const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

    useEffect(() => {
        if (pathname === '/trade') {
            setNavClassList('w-screen bg-transparent z-10 backdrop-filter backdrop-blur')
        } else {
            setNavClassList('w-screen bg-transparent gradiant-border-bottom z-10 backdrop-filter backdrop-blur')
        }
    }, [pathname])

    return (
        <header className="flex flex-row flex-nowrap justify-between w-screen navbar-bg-green-thick-to-thin">
            <Disclosure as="nav" className={navClassList}>
                {({ open }) => (
                    <>
                        <div className="px-4 py-1.5">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img src={Logo} alt="Sushi" className="h-10 w-auto" />
                                    </div>
                                    <div className="hidden sm:block sm:ml-4">
                                        <div className="flex space-x-2">
                                            {/* <NavLink id={`swap-nav-link`} to={'/swap'}>
                                                {i18n._(t`Swap`)}
                                            </NavLink> */}
                                            {/* <NavLink
                                                id={`pool-nav-link`}
                                                to={'/pool'}
                                                isActive={(match, { pathname }) =>
                                                    Boolean(match) ||
                                                    pathname.startsWith('/add') ||
                                                    pathname.startsWith('/remove') ||
                                                    pathname.startsWith('/create') ||
                                                    pathname.startsWith('/find')
                                                }
                                            >
                                                {i18n._(t`Pool`)}
                                            </NavLink> */}
                                            {/* {chainId && [ChainId.BSC, ChainId.MATIC, ChainId.BKC, ChainId.BSC_TESTNET].includes(chainId) && (
                                                <NavLink id={`yield-nav-link`} to={'/yield'}>
                                                    {i18n._(t`Yield`)}
                                                </NavLink>
                                            )} */}
                                            {/* {chainId === ChainId.MAINNET && (
                                                <NavLink id={`sushibar-nav-link`} to={'/sushibar'}>
                                                    {i18n._(t`SushiBar`)}
                                                </NavLink>
                                            )} */}
                                            {/* {chainId &&
                                                [ChainId.BKC, ChainId.KOVAN, ChainId.BSC, ChainId.MATIC].includes(
                                                    chainId
                                                ) && (
                                                    <NavLink id={`kashi-nav-link`} to={'/bento/kashi/lend'}>
                                                        {i18n._(t`Lend`)}
                                                    </NavLink>
                                                )} */}
                                            {/* chainId &&
                                                [
                                                    ChainId.BSC_TESTNET,
                                                    ChainId.BKC,
                                                    ChainId.BSC,
                                                    ChainId.XCHAIN
                                                ].includes(
                                                    chainId
                                                ) && (
                                                    <NavLink id={`bento-nav-link`} to={'/launchpad'}>
                                                        {i18n._(t`Launchpad`)}
                                                    </NavLink>
                                                )*/}
                                            {/* {chainId &&
                                                [
                                                    ChainId.BSC_TESTNET,
                                                    ChainId.BKC,
                                                    ChainId.BSC,
                                                    ChainId.XCHAIN
                                                ].includes(
                                                    chainId
                                                ) && (
                                                    <NavLink id={`bento-nav-link`} to={'/stake'}>
                                                        {i18n._(t`Stake`)}
                                                    </NavLink>
                                                )}
                                            {chainId &&
                                                [
                                                    ChainId.BSC_TESTNET,
                                                    ChainId.BKC,
                                                    ChainId.BSC,
                                                    ChainId.XCHAIN
                                                ].includes(
                                                    chainId
                                                ) && (
                                                    <NavLink id={`bento-nav-link`} to={'/donate'}>
                                                        {i18n._(t`Stake & Donate`)}
                                                    </NavLink>
                                                )} */}
                                            <NavLink id={`bento-nav-link`} to={'/launchpad'}>
                                                {i18n._(t`Launchpad`)}
                                            </NavLink>
                                            <NavLink id={`bento-nav-link`} to={'/pool'}>
                                                {i18n._(t`Pool`)}
                                            </NavLink>
                                            <NavLink id={`bento-nav-link`} to={'/donate'}>
                                                {i18n._(t`Pool for donation`)}
                                            </NavLink>
                                            {/* <NavLink id={`bento-nav-link`} to={'/mev-auction'}>
                                                {i18n._(t`MEV Auction`)}
                                            </NavLink> */}
                                            {/* {chainId === ChainId.MAINNET && (
                                                <NavLink id={`vesting-nav-link`} to={'/vesting'}>
                                                    {i18n._(t`Vesting`)}
                                                </NavLink>
                                            )} */}
                                            {/* {chainId &&
                                                [
                                                    ChainId.BKC,
                                                    ChainId.BSC,
                                                    ChainId.XDAI,
                                                    ChainId.FANTOM,
                                                    ChainId.MATIC
                                                ].includes(chainId) && (
                                                    <ExternalLink
                                                        id={`analytics-nav-link`}
                                                        href={ANALYTICS_URL[chainId] || 'https://analytics.sushi.com'}
                                                    >
                                                        {i18n._(t`Analytics`)}
                                                    </ExternalLink>
                                                )} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center justify-center w-full lg:w-auto p-4 fixed left-0 bottom-0 lg:relative lg:p-0 lg:bg-transparent">
                                    <div className="flex items-center justify-between sm:justify-end space-x-2 w-full">
                                        {/* {chainId &&
                                            [ChainId.MAINNET].includes(chainId) &&
                                            library &&
                                            library.provider.isMetaMask && (
                                                <>
                                                    <QuestionHelper
                                                        text={i18n._(t`Add xSushi to your Metamask wallet`)}
                                                    >
                                                        <div
                                                            className="hidden sm:inline-block rounded-md bg-light-green hover:bg-super-light-green cursor-pointer"
                                                            onClick={() => {
                                                                const params: any = {
                                                                    type: 'ERC20',
                                                                    options: {
                                                                        address:
                                                                            '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
                                                                        symbol: 'XSUSHI',
                                                                        decimals: 18,
                                                                        image:
                                                                            'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272/logo.png'
                                                                    }
                                                                }

                                                                if (
                                                                    library &&
                                                                    library.provider.isMetaMask &&
                                                                    library.provider.request
                                                                ) {
                                                                    library.provider
                                                                        .request({
                                                                            method: 'wallet_watchAsset',
                                                                            params
                                                                        })
                                                                        .then(success => {
                                                                            if (success) {
                                                                                console.log(
                                                                                    'Successfully added XSUSHI to MetaMask'
                                                                                )
                                                                            } else {
                                                                                throw new Error('Something went wrong.')
                                                                            }
                                                                        })
                                                                        .catch(console.error)
                                                                }
                                                            }}
                                                        >
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/tokens/xsushi-square.jpg`}
                                                                alt="Switch Network"
                                                                style={{
                                                                    minWidth: 36,
                                                                    minHeight: 36,
                                                                    maxWidth: 36,
                                                                    maxHeight: 36
                                                                }}
                                                                className="rounded-md object-contain"
                                                            />
                                                        </div>
                                                    </QuestionHelper>
                                                </>
                                            )} */}

                                        {chainId &&
                                            [ChainId.BKC, ChainId.BSC, ChainId.MATIC].includes(chainId) &&
                                            library &&
                                            library.provider.isMetaMask && (
                                                <>
                                                    <QuestionHelper text={i18n._(t`Add MVP to your Metamask wallet`)}>
                                                        <div
                                                            className="hidden sm:inline-block rounded-md bg-dark-900 hover:bg-dark-800 cursor-pointer"
                                                            onClick={() => {
                                                                let address: string | undefined
                                                                switch (chainId) {
                                                                    case ChainId.BKC:
                                                                        address =
                                                                            '0xDD7847deD760a8e7FB882B4A9B0e990323415ed9'
                                                                        break
                                                                    case ChainId.BSC:
                                                                        address =
                                                                            '0x3379A0BdF5A5CB566127C421782686BA0f80490a'
                                                                        break
                                                                }
                                                                const params: any = {
                                                                    type: 'ERC20',
                                                                    options: {
                                                                        address: address,
                                                                        symbol: 'MVP',
                                                                        decimals: 18,
                                                                        image:
                                                                            'https://raw.githubusercontent.com/dfy-asia/default-token-list/main/src/images/mvp.png'
                                                                    }
                                                                }

                                                                if (
                                                                    library &&
                                                                    library.provider.isMetaMask &&
                                                                    library.provider.request
                                                                ) {
                                                                    library.provider
                                                                        .request({
                                                                            method: 'wallet_watchAsset',
                                                                            params
                                                                        })
                                                                        .then(success => {
                                                                            if (success) {
                                                                                console.log(
                                                                                    'Successfully added MVP to MetaMask'
                                                                                )
                                                                            } else {
                                                                                throw new Error('Something went wrong.')
                                                                            }
                                                                        })
                                                                        .catch(console.error)
                                                                }
                                                            }}
                                                        >
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/tokens/mvp-square.jpg`}
                                                                alt="Switch Network"
                                                                style={{
                                                                    minWidth: 36,
                                                                    minHeight: 36,
                                                                    maxWidth: 36,
                                                                    maxHeight: 36
                                                                }}
                                                                className="rounded-md object-contain"
                                                            />
                                                        </div>
                                                    </QuestionHelper>
                                                    <QuestionHelper text={i18n._(t`Add MD to your Metamask wallet`)}>
                                                        <div
                                                            className="hidden sm:inline-block rounded-md bg-dark-900 hover:bg-dark-800 cursor-pointer"
                                                            onClick={() => {
                                                                let address: string | undefined
                                                                switch (chainId) {
                                                                    case ChainId.BKC:
                                                                        address =
                                                                            '0x9c882a7004D4bB7E5fa77856625225EA29619323'
                                                                        break
                                                                    case ChainId.BSC:
                                                                        address =
                                                                            '0x7E78a9b7c688c5b8152dF3f50f6F32E983f28ac8'
                                                                        break
                                                                }
                                                                const params: any = {
                                                                    type: 'ERC20',
                                                                    options: {
                                                                        address: address,
                                                                        symbol: 'MD',
                                                                        decimals: 18,
                                                                        image:
                                                                            'https://raw.githubusercontent.com/dfy-asia/default-token-list/main/src/images/md.png'
                                                                    }
                                                                }

                                                                if (
                                                                    library &&
                                                                    library.provider.isMetaMask &&
                                                                    library.provider.request
                                                                ) {
                                                                    library.provider
                                                                        .request({
                                                                            method: 'wallet_watchAsset',
                                                                            params
                                                                        })
                                                                        .then(success => {
                                                                            if (success) {
                                                                                console.log(
                                                                                    'Successfully added MVP to MetaMask'
                                                                                )
                                                                            } else {
                                                                                throw new Error('Something went wrong.')
                                                                            }
                                                                        })
                                                                        .catch(console.error)
                                                                }
                                                            }}
                                                        >
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/images/tokens/md-square.jpg`}
                                                                alt="Switch Network"
                                                                style={{
                                                                    minWidth: 36,
                                                                    minHeight: 36,
                                                                    maxWidth: 36,
                                                                    maxHeight: 36
                                                                }}
                                                                className="rounded-md object-contain"
                                                            />
                                                        </div>
                                                    </QuestionHelper>
                                                    {chainId === ChainId.BSC && (
                                                        <QuestionHelper
                                                            text={i18n._(t`Add MT to your Metamask wallet`)}
                                                        >
                                                            <div
                                                                className="hidden sm:inline-block rounded-md bg-white cursor-pointer"
                                                                onClick={() => {
                                                                    let address: string | undefined
                                                                    switch (chainId) {
                                                                        case ChainId.BSC:
                                                                            address =
                                                                                '0xF9800Ba96038AaCeA81734d2Ff40b7bC8358545D'
                                                                            break
                                                                    }
                                                                    const params: any = {
                                                                        type: 'ERC20',
                                                                        options: {
                                                                            address: address,
                                                                            symbol: 'MT',
                                                                            decimals: 18,
                                                                            image:
                                                                                'https://mvp.dfy.asia/images/tokens/mt-token.png'
                                                                        }
                                                                    }

                                                                    if (
                                                                        library &&
                                                                        library.provider.isMetaMask &&
                                                                        library.provider.request
                                                                    ) {
                                                                        library.provider
                                                                            .request({
                                                                                method: 'wallet_watchAsset',
                                                                                params
                                                                            })
                                                                            .then(success => {
                                                                                if (success) {
                                                                                    console.log(
                                                                                        'Successfully added MT to MetaMask'
                                                                                    )
                                                                                } else {
                                                                                    throw new Error(
                                                                                        'Something went wrong.'
                                                                                    )
                                                                                }
                                                                            })
                                                                            .catch(console.error)
                                                                    }
                                                                }}
                                                            >
                                                                <img
                                                                    src={`${process.env.PUBLIC_URL}/images/tokens/mt-token.png`}
                                                                    alt="Switch Network"
                                                                    style={{
                                                                        minWidth: 36,
                                                                        minHeight: 36,
                                                                        maxWidth: 36,
                                                                        maxHeight: 36
                                                                    }}
                                                                    className="rounded-md object-contain"
                                                                />
                                                            </div>
                                                        </QuestionHelper>
                                                    )}
                                                    {chainId === ChainId.BSC && (
                                                        <QuestionHelper
                                                            text={i18n._(t`Add BTCB to your Metamask wallet`)}
                                                        >
                                                            <div
                                                                className="hidden sm:inline-block rounded-md bg-white cursor-pointer"
                                                                onClick={() => {
                                                                    let address: string | undefined
                                                                    switch (chainId) {
                                                                        case ChainId.BSC:
                                                                            address =
                                                                                '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'
                                                                            break
                                                                    }
                                                                    const params: any = {
                                                                        type: 'ERC20',
                                                                        options: {
                                                                            address: address,
                                                                            symbol: 'BTCB',
                                                                            decimals: 18,
                                                                            image:
                                                                                'https://bscscan.com/token/images/btcb_32.png'
                                                                        }
                                                                    }

                                                                    if (
                                                                        library &&
                                                                        library.provider.isMetaMask &&
                                                                        library.provider.request
                                                                    ) {
                                                                        library.provider
                                                                            .request({
                                                                                method: 'wallet_watchAsset',
                                                                                params
                                                                            })
                                                                            .then(success => {
                                                                                if (success) {
                                                                                    console.log(
                                                                                        'Successfully added BTCB to MetaMask'
                                                                                    )
                                                                                } else {
                                                                                    throw new Error(
                                                                                        'Something went wrong.'
                                                                                    )
                                                                                }
                                                                            })
                                                                            .catch(console.error)
                                                                    }
                                                                }}
                                                            >
                                                                <img
                                                                    src="https://bscscan.com/token/images/btcb_32.png"
                                                                    alt="Switch Network"
                                                                    style={{
                                                                        minWidth: 36,
                                                                        minHeight: 36,
                                                                        maxWidth: 36,
                                                                        maxHeight: 36,
                                                                        padding: 5
                                                                    }}
                                                                    className="rounded-md object-contain"
                                                                />
                                                            </div>
                                                        </QuestionHelper>
                                                    )}
                                                    {chainId === ChainId.BSC && (
                                                        <QuestionHelper
                                                            text={i18n._(t`Add MEV to your Metamask wallet`)}
                                                        >
                                                            <div
                                                                className="hidden sm:inline-block rounded-md bg-white cursor-pointer"
                                                                onClick={() => {
                                                                    let address: string | undefined
                                                                    switch (chainId) {
                                                                        case ChainId.BSC:
                                                                            address =
                                                                                '0x9b98646315CC7677CE02a3cCf580c80f36ACA4ff'
                                                                            break
                                                                    }
                                                                    const params: any = {
                                                                        type: 'ERC20',
                                                                        options: {
                                                                            address: address,
                                                                            symbol: 'MEV',
                                                                            decimals: 18,
                                                                            image: mevTokenicon
                                                                        }
                                                                    }

                                                                    if (
                                                                        library &&
                                                                        library.provider.isMetaMask &&
                                                                        library.provider.request
                                                                    ) {
                                                                        library.provider
                                                                            .request({
                                                                                method: 'wallet_watchAsset',
                                                                                params
                                                                            })
                                                                            .then(success => {
                                                                                if (success) {
                                                                                    console.log(
                                                                                        'Successfully added MEV to MetaMask'
                                                                                    )
                                                                                } else {
                                                                                    throw new Error(
                                                                                        'Something went wrong.'
                                                                                    )
                                                                                }
                                                                            })
                                                                            .catch(console.error)
                                                                    }
                                                                }}
                                                            >
                                                                <img
                                                                    src={mevTokenicon}
                                                                    alt="Switch Network"
                                                                    style={{
                                                                        minWidth: 36,
                                                                        minHeight: 36,
                                                                        maxWidth: 36,
                                                                        maxHeight: 36,
                                                                        padding: 5
                                                                    }}
                                                                    className="rounded-md object-contain"
                                                                />
                                                            </div>
                                                        </QuestionHelper>
                                                    )}
                                                </>
                                            )}
                                        {/* {chainId && chainId === ChainId.MATIC && (
                                            <div className="hidden sm:inline-block">
                                                <a
                                                    className="flex items-center rounded bg-light-green hover:bg-super-light-green p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto"
                                                    href="https://wallet.matic.network/bridge/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="grid grid-flow-col auto-cols-max items-center rounded-lg text-sm text-secondary py-2 px-3 pointer-events-auto">
                                                        <div className="text-white">{i18n._(t`Bridge Assets`)}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        )} */}
                                        {library && library.provider.isMetaMask && (
                                            <div className="hidden sm:inline-block">
                                                <Web3Network />
                                            </div>
                                        )}

                                        <div className="w-auto flex items-center rounded bg-light-green hover:bg-super-light-green p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                                            {account && chainId && userEthBalance && (
                                                <>
                                                    <div className="py-2 px-3 text-white text-bold">
                                                        {userEthBalance?.toSignificant(4)}{' '}
                                                        {Currency.getNativeCurrencySymbol(chainId)}
                                                    </div>
                                                </>
                                            )}
                                            <Web3Status />
                                        </div>
                                        <LanguageSwitch />

                                        {chainId &&
                                            [ChainId.GÖRLI, ChainId.KOVAN, ChainId.RINKEBY, ChainId.ROPSTEN].includes(
                                                chainId
                                            ) && <Web3Faucet />}

                                        <MoreMenu />
                                    </div>
                                </div>
                                <div className="-mr-2 flex sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none">
                                        <span className="sr-only">{i18n._(t`Open main menu`)}</span>
                                        {open ? (
                                            <X title="Close" className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Burger title="Burger" className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                {/* <a
                                href="#"
                                className="bg-gray-1000 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Dashboard
                            </a> */}

                                {/* <NavLink id={`swap-nav-link`} to={'/swap'}>
                                    {i18n._(t`Swap`)}
                                </NavLink>
                                <NavLink
                                    id={`pool-nav-link`}
                                    to={'/pool'}
                                    isActive={(match, { pathname }) =>
                                        Boolean(match) ||
                                        pathname.startsWith('/add') ||
                                        pathname.startsWith('/remove') ||
                                        pathname.startsWith('/create') ||
                                        pathname.startsWith('/find')
                                    }
                                >
                                    {i18n._(t`Pool`)}
                                </NavLink> */}

                                {/* {chainId && [ChainId.BSC, ChainId.MATIC, ChainId.BKC, ChainId.BSC_TESTNET].includes(chainId) && (
                                    <NavLink id={`yield-nav-link`} to={'/yield'}>
                                        {i18n._(t`Yield`)}
                                    </NavLink>
                                )}
                                {chainId &&
                                    [ChainId.MAINNET, ChainId.KOVAN, ChainId.BSC, ChainId.MATIC].includes(chainId) && (
                                        <NavLink id={`kashi-nav-link`} to={'/bento/kashi/lend'}>
                                            {i18n._(t`Kashi Lending`)}
                                        </NavLink>
                                    )} */}
                                <NavLink id={`bento-nav-link`} to={'/launchpad'}>
                                    {i18n._(t`Launchpad`)}
                                </NavLink>
                                <NavLink id={`bento-nav-link`} to={'/pool'}>
                                    {i18n._(t`Pool`)}
                                </NavLink>
                                <NavLink id={`bento-nav-link`} to={'/donate'}>
                                    {i18n._(t`Pool for donation`)}
                                </NavLink>
                                {/* <NavLink id={`bento-nav-link`} to={'/mev-auction'}>
                                    {i18n._(t`MEV Auction`)}
                                </NavLink> */}
                                {/* {chainId === ChainId.MAINNET && (
                                    <NavLink id={`stake-nav-link`} to={'/sushibar'}>
                                        {i18n._(t`SushiBar`)}
                                    </NavLink>
                                )}
                                {chainId === ChainId.MAINNET && (
                                    <NavLink id={`vesting-nav-link`} to={'/vesting'}>
                                        {i18n._(t`Vesting`)}
                                    </NavLink>
                                )} */}
                                {/* {chainId &&
                                    [
                                        ChainId.MAINNET,
                                        ChainId.BKC,
                                        ChainId.BSC,
                                        ChainId.XDAI,
                                        ChainId.FANTOM,
                                        ChainId.MATIC
                                    ].includes(chainId) && (
                                        <ExternalLink
                                            id={`analytics-nav-link`}
                                            href={ANALYTICS_URL[chainId] || 'https://analytics.sushi.com'}
                                        >
                                            {i18n._(t`Analytics`)}
                                        </ExternalLink>
                                    )} */}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    )
}

export default AppBar
