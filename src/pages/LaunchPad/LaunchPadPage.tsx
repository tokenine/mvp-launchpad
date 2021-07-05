import { useState } from 'react'
import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import Web3Status from 'components/Web3Status'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { Input as NumericalInput } from 'components/NumericalInput'
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
import { Token } from 'dfy-sdk'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { launchTokenListByChainId, LaunchTokenList } from '../../constants/launch-token-list'
 
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function LaunchPadPage({
    match: {
        params: {address}
    }}: RouteComponentProps<{ address: string }>)
{

    const history = useHistory()

    const { i18n } = useLingui()

    const { account, chainId } = useActiveWeb3React()
    const [isCopied, staticCopy] = useCopyClipboard()

    const [launchDetail, setLaunchDetail] = useState<LaunchTokenList>()
    
    const tokenineSwap = useTokenineSwapContract(address ? address : '')

    const [forBuyingTokenAddress, setForBuyingTokenAddress] = useState('')
    const [forBuyingTokenName, forBuyingTokenSymbol, forBuyingTokenDecimals] = useLaunchToken(forBuyingTokenAddress, account)
    const forBuyingCurrencyAmount = useCurrencyBalance(account ?? undefined, forBuyingTokenAddress !== '' ? new Token(chainId ?? 0, forBuyingTokenAddress, forBuyingTokenDecimals, forBuyingTokenSymbol, forBuyingTokenName) : undefined)
    
    const [busdBalance, setBusdBalance] = useState('')
    const [tokenRate, setTokenRate] = useState(BigNumber.from(0))
    const [isCommiting, setIsCommiting] = useState(false)
    const [tokenBalance, setTokenBalanec] = useState(BigNumber.from(0))
    const [warningMsg, setWarningMsg] = useState('')

    const [launchPadRemain, setLaunchPadRemain] = useState('')

    const [launchpadTokenAddress, setLauchpadToken] = useState('')
    const [luachPadTokenName, luachPadTokenSymbol, luachPadDecimals] = useLaunchToken(launchpadTokenAddress, account)
    const launchCurrencyAmount = useCurrencyBalance(account ?? undefined, launchpadTokenAddress !== '' ? new Token(chainId ?? 0, launchpadTokenAddress, luachPadDecimals, luachPadTokenSymbol, luachPadTokenName) : undefined)

    const [approvalState, approve] = useApproveCallback(forBuyingCurrencyAmount, tokenineSwap ? tokenineSwap.address : '')
    const addTransaction = useTransactionAdder()

    const onMax = () => {
        setBusdBalance(forBuyingCurrencyAmount ? forBuyingCurrencyAmount.toExact() : '')
    }

    const decimals = forBuyingTokenDecimals ? forBuyingTokenDecimals : 18

    useEffect(() => {
        if (!chainId) return
        const checkLaunchDetail = launchTokenListByChainId[chainId][address]
        if (!address || (address && address === '')
            || !checkLaunchDetail
            || (checkLaunchDetail && !checkLaunchDetail.available))
        {
            history.push('/launchpad')
            return
        }
        setLaunchDetail(checkLaunchDetail)
        const getSwapDetial = async () => {
            const addressA = await tokenineSwap?.functions.tokenA()
            if (addressA) {
                setForBuyingTokenAddress(addressA[0])
            }
            const addressB = await tokenineSwap?.functions.tokenB()
            if (addressB) {
                setLauchpadToken(addressB[0])
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
    }, [tokenineSwap, tokenBalance, decimals, address, history, chainId])

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
                            {launchDetail && launchDetail.imageTokenUrl && <div className="text-center mb-10">
                                <img alt="launchpad" src={launchDetail.imageTokenUrl} className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                            </div>}
                            <p className="text-h3 mb-5">Proposal Details</p>
                            <div dangerouslySetInnerHTML={{__html: launchDetail ? launchDetail.proposalContent : ''}} />
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                <div className="flex mb-10 ">
                                    <div className="pr-5 text-white text-center border-r border-white">
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
                                            Balance: {forBuyingCurrencyAmount ? forBuyingCurrencyAmount?.toSignificant(6) : 0} {forBuyingTokenSymbol}
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
                                            <span className="ml-2">{forBuyingTokenSymbol}</span>
                                        </div>
                                        <p className={`${ warningMsg === '' ? 'invisible' : 'visible' } text-red text-sm`}>Warning: {warningMsg}</p>
                                        <div className="text-white w-full text-center relative mt-8 h-2">
                                            <ArrowCenter>
                                                <AiOutlineArrowDown size="24" />
                                            </ArrowCenter>
                                        </div>
                                        <div className="text-white text-right text-caption2 mt-8">
                                            Balance: {launchCurrencyAmount ? launchCurrencyAmount.toSignificant(6) : 0} {luachPadTokenSymbol}
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
                                                disabled={isCommiting || warningMsg !== '' || busdBalance === ''}
                                                onClick={async () => {
                                                    try {
                                                        setIsCommiting(true)
                                                        const response = await tokenineSwap?.functions.swap(busdBalance.toBigNumber(decimals))
                                                        addTransaction(response, {
                                                            summary: 'Launch commited!'
                                                        })
                                                        setBusdBalance('')
                                                        setTokenBalanec(BigNumber.from(0))
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

export default LaunchPadPage
