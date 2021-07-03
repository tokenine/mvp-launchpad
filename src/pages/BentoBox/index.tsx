import BentoBoxHero from '../../assets/kashi/bentobox-hero.jpg'
import BentoBoxLogo from '../../assets/kashi/bentobox-logo.svg'
import BUSD from '../../assets/images/launchpad-token/busd_logo_black_flushleft-300x138.png'
import { useState } from 'react'
import { Card } from 'kashi/components'
import ComingSoon from '../../assets/kashi/coming-soon.png'
import { Helmet } from 'react-helmet'
import KashiNeonSign from '../../assets/kashi/kashi-neon.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useMemo } from 'react'
import Web3Status from 'components/Web3Status'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { Input as NumericalInput } from 'components/NumericalInput'
import { useAllTokens } from '../../hooks/Tokens'
import Button from 'components/Button'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { Token } from 'dfy-sdk'
import { useTokenineSwapContract } from '../../hooks/useContract'
import { BigNumber } from 'ethers'
import { useTransactionAdder } from '../../state/transactions/hooks'

function BentoBox(): JSX.Element {
    const { i18n } = useLingui()

    const defaultTokens = useAllTokens()
    const { account, chainId } = useActiveWeb3React()
    // console.log('defaultTokens:', defaultTokens)

    const token = Object.values(defaultTokens).find(token =>
        token.symbol === 'BUSD'
    )

    // for testing
    Object.defineProperty(token, 'address', {
        writable: true,
        value: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23'
    })
    Object.defineProperty(token, 'tokenInfo.address', {
        writable: true,
        value: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23'
    })

    const tokenineSwap = useTokenineSwapContract()
    const currencyAmount = useCurrencyBalance(account ?? undefined, token)

    const [approvalState, approve] = useApproveCallback(currencyAmount, tokenineSwap ? tokenineSwap.address : '')

    const [busdBalance, setBusdBalance] = useState('')
    const [isCommiting, setIsCommiting] = useState(false)
    const [tokenBalance, setTokenBalanec] = useState(BigNumber.from(0))
    const [warningMsg, setWarningMsg] = useState('')

    const addTransaction = useTransactionAdder()

    const onMax = () => {
        setBusdBalance(currencyAmount ? currencyAmount.toExact() : '')
    }

    const decimals = token ? token.decimals : 18

    useEffect(() => {
        const getSwapRate = async () => {
            setWarningMsg('')
            const rate = await tokenineSwap?.functions.rate()
            if (rate && busdBalance !== '') {
                const bbusd = busdBalance.toBigNumber(decimals)
                if (bbusd.lte('100000000000000000')) {
                    setWarningMsg('Amount must be greater then 0.1')
                    return
                }
                setTokenBalanec(bbusd.mul(rate[0]))
            } else {
                setTokenBalanec(BigNumber.from(0))
            }
        }
        getSwapRate()
    }, [busdBalance, tokenineSwap, tokenBalance, decimals])

    return (
        <>
            {' '}
            <Helmet>
                <title>Launchpad | DFY</title>
            </Helmet>
            <div>

                <div className="relative flex flex-col items-center">
                    {/* <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" /> */}

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
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
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
                                        <div className="flex items-center rounded bg-white space-x-3 p-3 mb-1 w-full">
                                            <Button
                                                onClick={onMax}
                                                size="small"
                                                className="bg-transparent hover:bg-primary hover:text-white border border-high-emphesis rounded-full text-gray-500 text-xs font-medium whitespace-nowrap"
                                            >
                                                {i18n._(t`Max`)}
                                            </Button>
                                            <NumericalInput
                                                disabled={isCommiting}
                                                className="token-amount-input text-right"
                                                value={busdBalance}
                                                onUserInput={val => {
                                                    setBusdBalance(val)
                                                }}
                                            />
                                        </div>
                                        { warningMsg !== '' && <p className="text-red text-sm">Warning: {warningMsg}</p>}
                                        <p className="text-white mb-8 mt-8 text-center text-h1">{tokenBalance.toFixed(decimals)} Tokens</p>
                                        { (ApprovalState.NOT_APPROVED === approvalState || ApprovalState.PENDING === approvalState) && (
                                            <Button
                                                disabled={ApprovalState.PENDING === approvalState}
                                                onClick={approve}
                                                className="w-full border-gradient py-2 font-bold text-center text-high-emphesis"
                                            >
                                                { ApprovalState.PENDING === approvalState ? i18n._(t`Approving`) : i18n._(t`Approve`)}
                                            </Button>
                                        ) }
                                        { ApprovalState.APPROVED === approvalState && (
                                            <Button
                                                disabled={isCommiting || warningMsg !== '' || busdBalance === ''}
                                                onClick={async () => {
                                                    try {
                                                        setIsCommiting(true)
                                                        const response = await tokenineSwap?.functions.swap(busdBalance.toBigNumber(decimals))
                                                        addTransaction(response, {
                                                            summary: 'Launch commited!'
                                                        })
                                                        setBusdBalance('')
                                                        setIsCommiting(false)
                                                    } catch (err) {
                                                        console.error(err)
                                                        setIsCommiting(false)
                                                    }
                                                }}
                                                className="w-full border-gradient py-2 font-bold text-center text-high-emphesis"
                                            >
                                                {i18n._(t`COMMIT`)}
                                            </Button>
                                        ) }
                                    </div>
                                ) : (
                                    <Web3Status />
                                )}
                            </div>
                        </Card>
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 bg-green-thick hover:bg-super-light-green cursor-pointer shadow-blue-glow hover:shadow-blue-glow-hovered transition-colors">
                            <img src={ComingSoon} alt="Coming Soon" className="block m-auto w-full h-auto" />
                        </Card>
                        {/* <Card className="flex items-center justify-center col-span-2 md:col-span-1 bg-green-thick hover:bg-super-light-green cursor-pointer shadow-pink-glow hover:shadow-pink-glow-hovered transition-colors">
                            <img src={ComingSoon} alt="Coming Soon" className="block m-auto w-full h-auto" />
                        </Card> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BentoBox
