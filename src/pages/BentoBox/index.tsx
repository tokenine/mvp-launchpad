import BentoBoxHero from '../../assets/kashi/bentobox-hero.jpg'
import BentoBoxLogo from '../../assets/kashi/bentobox-logo.svg'
import BUSD from '../../assets/images/launchpad-token/busd_logo_black_flushleft-300x138.png'
import { useState } from 'react'
import { Card } from 'kashi/components'
import ComingSoon from '../../assets/kashi/coming-soon.png'
import { Helmet } from 'react-helmet'
import KashiNeonSign from '../../assets/kashi/kashi-neon.png'
import { Link } from 'react-router-dom'
import React from 'react'
import Web3Status from 'components/Web3Status'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { Input as NumericalInput } from 'components/NumericalInput'
import { useAllTokens } from '../../hooks/Tokens'
import Button from 'components/Button'

function BentoBox(): JSX.Element {
    const { i18n } = useLingui()

    const defaultTokens = useAllTokens()
    const { account, chainId } = useActiveWeb3React()
    // console.log('defaultTokens:', defaultTokens)

    const token = Object.values(defaultTokens).find(token =>
        token.symbol === 'BUSD'
    )
    // console.log('token:', token)
    const currencyAmount = useCurrencyBalance(account ?? undefined, token)
    // console.log('currencyAmount:', currencyAmount)

    const [busdBalance, setBusdBalance] = useState('')

    const onMax = () => {
        setBusdBalance(currencyAmount ? currencyAmount.toExact() : '')
    }

    return (
        <>
            {' '}
            <Helmet>
                <title>Launchpad | DFY</title>
            </Helmet>
            <div>
                {/* <div
                    className="absolute top-0 right-0 left-0"
                    style={{
                        height: '700px',
                        zIndex: -1
                    }}
                >
                    <img
                        className="h-full w-full object-cover object-bottom opacity-50 -mt-32"
                        src={BentoBoxHero}
                        alt=""
                    />
                </div> */}

                <div className="relative flex flex-col items-center">
                    <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" />

                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-3xl md:text-5xl text-high-emphesis mb-20">
                            {i18n._(t`Launchpad`)}
                        </div>
                        {/* <div className="font-medium text-base md:text-lg lg:text-xl text-center text-high-emphesis mt-0 md:mt-4 mb-8 p-4">
                            {i18n._(
                                t`BentoBox is an innovative way to use dapps gas-efficiently and gain extra yield.`
                            )}
                        </div> */}
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-3">
                        <Card className="col-span-2 md:col-span-1 w-full bg-green-thick hover:bg-super-light-green rounded shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                {/* <img alt="" src={KashiNeonSign} className="block m-auto w-full h-auto mb-4" /> */}
                                <img alt="token" src={BUSD} className="mb-5" />
                                <div className="mb-10 text-center text-white">
                                    <p className="text-h1 font-bold">BUSD</p>
                                    <p>BUSD stable coin</p>
                                </div>
                                {account ? (
                                    <div>
                                        <div className="text-white text-right text-caption2">
                                            Balance: {currencyAmount ? currencyAmount?.toSignificant(6) : 0} BUSD
                                        </div>
                                        <div className="flex items-center rounded bg-white space-x-3 p-3 mb-3 w-full">
                                            <Button
                                                onClick={onMax}
                                                size="small"
                                                className="bg-transparent hover:bg-primary hover:text-white border border-high-emphesis rounded-full text-gray-500 text-xs font-medium whitespace-nowrap"
                                            >
                                                {i18n._(t`Max`)}
                                            </Button>
                                            <NumericalInput
                                                className="token-amount-input text-right"
                                                value={busdBalance}
                                                onUserInput={val => {
                                                    setBusdBalance(val)
                                                }}
                                            /> 
                                        </div>
                                        <Link to={''}>
                                            <div
                                                className="w-full border-gradient py-2 font-bold text-center text-high-emphesis"
                                                // className="w-full rounded text-lg text-high-emphesis px-4 py-2"
                                            >
                                                {i18n._(t`BUY`)}
                                            </div>
                                        </Link>
                                    </div>
                                ) : (
                                    <Web3Status />
                                )}
                            </div>
                        </Card>
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 bg-green-thick hover:bg-super-light-green cursor-pointer shadow-blue-glow hover:shadow-blue-glow-hovered transition-colors">
                            <img src={ComingSoon} alt="Coming Soon" className="block m-auto w-full h-auto" />
                        </Card>
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 bg-green-thick hover:bg-super-light-green cursor-pointer shadow-pink-glow hover:shadow-pink-glow-hovered transition-colors">
                            <img src={ComingSoon} alt="Coming Soon" className="block m-auto w-full h-auto" />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BentoBox
