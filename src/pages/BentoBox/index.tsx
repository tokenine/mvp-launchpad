import BUSD from '../../assets/images/launchpad-token/busd_logo_black_flushleft-300x138.png'
import { useState } from 'react'
import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
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
import { useTokenineSwapContract } from '../../hooks/useContract'
import { BigNumber } from 'ethers'
import { useTransactionAdder } from '../../state/transactions/hooks'
import styled from 'styled-components'
import { useLaunchToken } from './useLaunchToken'
import { AiOutlineArrowDown, AiOutlineCopy } from 'react-icons/ai'
import { shortenAddress } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

const ArrowCenter = styled.div`
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
`

function BentoBox(): JSX.Element {
    const { i18n } = useLingui()

    const defaultTokens = useAllTokens()
    const { account } = useActiveWeb3React()

    const token = Object.values(defaultTokens).find(token =>
        token.symbol === 'BUSD'
    )

    const [isCopied, staticCopy] = useCopyClipboard()

    // for testing
    Object.defineProperty(token, 'address', {
        writable: true,
        value: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23'
    })
    Object.defineProperty(token, 'tokenInfo.address', {
        writable: true,
        value: '0xEcafC0F1E5448868A08d89fa99e1d2a0694aEe23'
    })

    const tokenineSwap = useTokenineSwapContract('0xbCC466227d5AADD66853339C8e51D1cB7B0E88E9')
    const currencyAmount = useCurrencyBalance(account ?? undefined, token)

    const [approvalState, approve] = useApproveCallback(currencyAmount, tokenineSwap ? tokenineSwap.address : '')

    const [busdBalance, setBusdBalance] = useState('')
    const [tokenRate, setTokenRate] = useState(BigNumber.from(0))
    const [isCommiting, setIsCommiting] = useState(false)
    const [tokenBalance, setTokenBalanec] = useState(BigNumber.from(0))
    const [warningMsg, setWarningMsg] = useState('')

    const [launchPadRemain, setLaunchPadRemain] = useState('')

    const [launchpadTokenAddress, setLauchpadToken] = useState('')
    const { luachPadTokenName, luachPadTokenSymbol, luachPadTokenOwnerBalance } = useLaunchToken(launchpadTokenAddress, account)

    const addTransaction = useTransactionAdder()

    const onMax = () => {
        setBusdBalance(currencyAmount ? currencyAmount.toExact() : '')
    }

    const decimals = token ? token.decimals : 18

    useEffect(() => {
        const getSwapDetial = async () => {
            const address = await tokenineSwap?.functions.tokenB()
            if (address) {
                setLauchpadToken(address[0])
            }
            const luanchpadRemain = await tokenineSwap?.functions.bBalance()
            if (luanchpadRemain) {
                setLaunchPadRemain(luanchpadRemain[0].toFixed(decimals))
            }
            const rate = await tokenineSwap?.functions.rate()
            if (rate) {
                setTokenRate(rate[0])
            }
        }
        getSwapDetial()
    }, [tokenineSwap, tokenBalance, decimals])

    return (
        <>
            {' '}
            <Helmet>
                <title>Launchpad | DFY</title>
            </Helmet>
            <BackgroundMain className="navbar-bg-green-thick-to-thin w-screen">

                <div className="relative flex flex-col items-center">
                    {/* <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" /> */}

                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-white my-20">
                            {i18n._(t`Launchpad`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl  rounded border border-white">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-white">
                            <img alt="launchpad" src={BUSD} className="mx-auto object-scale-down w-40 md:w-60 h-auto mb-5" />
                            <p className="text-h3 mb-5">Proposal Details</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ultrices lectus. Sed pharetra tempor cursus. Quisque quis lorem luctus, rutrum justo ut, auctor urna. Pellentesque ut neque sit amet magna dapibus accumsan.</p>
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                <div className="flex mb-10 ">
                                    <div className="pr-5 text-white border-r border-white">
                                        <p className="text-h1 font-bold">{luachPadTokenSymbol}</p>
                                        <p>{luachPadTokenName}</p>
                                    </div>
                                    <div className="text-white ml-5">
                                        <p>Address:</p>
                                        { launchpadTokenAddress && launchpadTokenAddress !== '' ? shortenAddress(launchpadTokenAddress).toLocaleUpperCase() : '' }
                                        <Button
                                            className="ml-3 active:outline-none"
                                            onClick={() => {
                                                staticCopy(launchpadTokenAddress)
                                            }}
                                        >
                                            <AiOutlineCopy className="inline" /> 
                                        </Button>    
                                        <span className="ml-5">{isCopied && <span>Copied!</span>}</span>
                                    </div>
                                </div>
                                <Card className="border border-white mb-10">
                                    <p className="text-white">Remain:</p> 
                                    <p className="text-center text-white text-h2">
                                       { launchPadRemain } {luachPadTokenSymbol}
                                    </p>
                                </Card>
                                {account ? (
                                    <div>
                                        <div className="text-white text-right text-caption2">
                                            Balance: {currencyAmount ? currencyAmount?.toSignificant(6) : 0} {token?.symbol}
                                        </div>
                                        <div className="flex items-center rounded bg-white space-x-3 p-3 w-full">
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
                                                    const bbusd = val.toBigNumber(decimals)
                                                    if (bbusd.lte('100000000000000000')) {
                                                        setWarningMsg('Amount must be greater then 0.1')
                                                    } else {
                                                        setWarningMsg('')
                                                    }
                                                    setTokenBalanec(bbusd.mul(tokenRate))
                                                    setBusdBalance(val)
                                                }}
                                            />
                                            <span className="ml-2">{token?.symbol}</span>
                                        </div>
                                        <p className={`${ warningMsg === '' ? 'invisible' : 'visible' } text-red text-sm`}>Warning: {warningMsg}</p>
                                        <div className="text-white w-full text-center relative mt-8 h-2">
                                            <ArrowCenter>
                                                <AiOutlineArrowDown size="24" />
                                            </ArrowCenter>
                                        </div>
                                        <div className="text-white text-right text-caption2 mt-8">
                                            Balance: {luachPadTokenOwnerBalance.toFixed(decimals)} {luachPadTokenSymbol}
                                        </div>
                                        <div className="flex items-center rounded bg-white space-x-3 p-3 w-full mb-10">
                                            <NumericalInput
                                                disabled={isCommiting}
                                                className="token-amount-input text-right"
                                                value={tokenBalance.toFixed(decimals)}
                                                onUserInput={val => {
                                                    const launchToken = val.toBigNumber(decimals)
                                                    const converted = launchToken.div(tokenRate)
                                                    setBusdBalance(converted.toFixed(decimals))
                                                    setTokenBalanec(launchToken)
                                                }}
                                            />
                                            <span className="ml-2">{luachPadTokenSymbol}</span>
                                        </div>
                                        {/* <p className="text-white mb-8 mt-8 text-center text-h1">{tokenBalance.toFixed(decimals)} Tokens</p> */}
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
                                                color="gradient3"
                                                disabled={isCommiting || warningMsg !== '' || busdBalance === '' || luachPadTokenOwnerBalance.eq(0)}
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
                                                className="w-full border border-white py-2 font-bold text-center text-white disabled:cursor-not-allowed"
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
                        {/* <Card className="flex items-center justify-center col-span-2 md:col-span-1 bg-green-thick hover:bg-super-light-green cursor-pointer shadow-pink-glow hover:shadow-pink-glow-hovered transition-colors">
                            <img src={ComingSoon} alt="Coming Soon" className="block m-auto w-full h-auto" />
                        </Card> */}
                    </div>
                </div>
            </BackgroundMain>
        </>
    )
}

export default BentoBox
