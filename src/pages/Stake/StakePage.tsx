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
import { useTokenineStakeContract } from '../../hooks/useContract'
import { useTransactionAdder } from '../../state/transactions/hooks'
import styled from 'styled-components'
import { useTokenDetail } from './useTokenDetail'
import { Token } from 'dfy-sdk'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { stakeTokenListByChainId, StakeTokenList } from '../../constants/stake-token'
import Loader from 'components/Loader'
import Countdown from 'react-countdown'
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function StakePage({
    match: {
        params: {address}
    }}: RouteComponentProps<{ address: string }>)
{

    const history = useHistory()

    const { i18n } = useLingui()

    const { account, chainId } = useActiveWeb3React()
    const [isLoadingEndDate, setIsLoadingEndDate] = useState(true)

    const [stakeDetail, setStakeDetail] = useState<StakeTokenList>()
    const [endDate, setEndDate] = useState(new Date())
    
    const [stakeByTokenBalance, setStakeByTokenBalance] = useState('')
    const [isCommiting, setIsCommiting] = useState(false)

    const [stakeByTokenName, stakeByTokenSymbol, stakeByTokenDecimals] = useTokenDetail(stakeDetail?.stakeByToken?.address, account)
    const stakeByTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, stakeDetail?.stakeByToken ? new Token(chainId ?? 0, stakeDetail?.stakeByToken?.address, stakeByTokenDecimals, stakeByTokenSymbol, stakeByTokenName) : undefined)

    const decimals = stakeByTokenDecimals

    const [stakeTokenName, stakeTokenSymbol, stakeTokenDecimals] = useTokenDetail(stakeDetail?.stakeToken?.address, account)
    const stakeTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, stakeDetail?.stakeToken ? new Token(chainId ?? 0, stakeDetail?.stakeToken?.address, stakeTokenDecimals, stakeTokenSymbol, stakeTokenName) : undefined)

    const [totalStakedBalance, setTotalStakedBalance] = useState('0')

    const [approvalState, approve] = useApproveCallback(stakeByTokenCurrencyAmount, stakeDetail?.stakeToken ? stakeDetail?.stakeToken.address : '')
    const addTransaction = useTransactionAdder()

    const stakeContract = useTokenineStakeContract(stakeDetail?.contractAddress ?? '')

    const onMax = () => {
        setStakeByTokenBalance(
            stakeByTokenCurrencyAmount ? stakeByTokenCurrencyAmount.toExact() : ''
        )
    }

    useEffect(() => {
        if (!chainId) return
        const checkStakeDetail = stakeTokenListByChainId[chainId][address]
        if (!address || (address && address === '')
            || !checkStakeDetail
            || (checkStakeDetail && !checkStakeDetail.available))
        {
            history.push('/pool')
            return
        }
        setStakeDetail(checkStakeDetail)
        const getMVPStakeDetail = async () => {
            try {
                const endDateContract = await stakeContract?.functions.endDate()
                if (endDateContract) {
                    setEndDate(new Date(endDateContract[0].toNumber() * 1000))
                    setIsLoadingEndDate(false)
                }
                const totalSupplyStakedFetch = await stakeContract?.functions.totalSupply()
                if (totalSupplyStakedFetch) {
                    const justSificantNumber = totalSupplyStakedFetch[0].toFixed(decimals).split('.')[0]
                    setTotalStakedBalance(numberWithCommas(justSificantNumber))
                }
            } catch (err) {
                console.error(err)
                setIsLoadingEndDate(false)
            }
        }
        getMVPStakeDetail()
    }, [address, history, chainId, stakeContract, decimals, stakeTokenCurrencyAmount])

    return (
        <>
            {' '}
            <Helmet>
                <title>Pool | DFY</title>
            </Helmet>
            <BackgroundMain className="w-screen">

                <div className="relative flex flex-col items-center">
                    {/* <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" /> */}

                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-black my-20">
                            {i18n._(t`Pool`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl rounded border border-black">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-black">
                            {stakeDetail && stakeDetail.detailImage && <div className="text-center mb-10">
                            <img alt="Self quarantine" src={stakeDetail.detailImage} className="inline-block w-1/2" />
                            </div>}
                            <p className="text-h3 mb-5">Self quarantine</p>
                            <div dangerouslySetInnerHTML={{__html: stakeDetail ? stakeDetail.proposalContent : ''}} />
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                {stakeByTokenName && stakeByTokenSymbol && stakeByTokenDecimals ? <div>
                                    <div className="flex mb-10 ">
                                        <div className="pr-5 text-black text-center border-r border-black">
                                            <p className="text-h1 font-bold">{stakeByTokenSymbol}</p>
                                            <p>{stakeByTokenName}</p>
                                        </div>
                                        <div className="text-black ml-5">
                                            <div>Time Remain:</div>
                                            <div>
                                                <Countdown
                                                    date={endDate}
                                                    renderer={({ days, hours, minutes, seconds}) => (
                                                        <span>{days}d {hours}h {minutes}m {seconds}s</span>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Card className="border border-black mb-10">
                                        <p className="text-black mb-3">Total Stakig:</p> 
                                        <p className="text-center text-black text-h2">
                                        { totalStakedBalance } {stakeByTokenSymbol}
                                        </p>
                                    </Card>
                                    <Card className="border border-black mb-10">
                                        <p className="text-black mb-3">Your Staking:</p> 
                                        <p className="text-center text-black text-h2">
                                        { stakeTokenCurrencyAmount ? stakeTokenCurrencyAmount.toSignificant(6) : 0 } {stakeByTokenSymbol}
                                        </p>
                                    </Card> 
                                </div> : <div className="w-2 mx-auto mb-10">
                                    <Loader stroke="black" />
                                </div>}
                                {account ? (
                                    <div>
                                        <div className="text-black text-right text-caption2">
                                            Balance: {stakeByTokenCurrencyAmount ? stakeByTokenCurrencyAmount?.toSignificant(6) : 0} {stakeByTokenSymbol}
                                        </div>
                                        { endDate.getTime() <= new Date().getTime() && !isLoadingEndDate  ? <div>
                                            <Button
                                                color="gradient3"
                                                disabled={isCommiting || !stakeTokenCurrencyAmount || stakeTokenCurrencyAmount?.toExact() === '0'}
                                                onClick={async () => {
                                                    try {
                                                        setIsCommiting(true)
                                                        const response = await stakeContract?.functions.leave(stakeTokenCurrencyAmount?.toExact().toBigNumber(decimals))
                                                        addTransaction(response, {
                                                            summary: 'Stake commited!'
                                                        })
                                                        setStakeByTokenBalance('')
                                                        setIsCommiting(false)
                                                    } catch (err) {
                                                        console.error(err)
                                                        setIsCommiting(false)
                                                    }
                                                }}
                                                className="w-full border border-black py-2 mb-5 font-bold text-center text-black disabled:cursor-not-allowed"
                                            >
                                                {i18n._(t`CLAIM BACK`)}
                                            </Button>
                                        </div> : <div>
                                            <div className="flex items-center rounded border border-black bg-white space-x-3 p-3 w-full mb-5">
                                                <Button
                                                    onClick={onMax}
                                                    size="small"
                                                    className="bg-transparent hover:bg-primary hover:text-black border border-high-emphesis rounded-full text-gray-500 text-xs font-medium whitespace-nowrap"
                                                >
                                                    {i18n._(t`Max`)}
                                                </Button>
                                                <NumericalInput
                                                    disabled={isCommiting}
                                                    className="token-amount-input text-right"
                                                    value={stakeByTokenBalance}
                                                    onUserInput={val => {
                                                        setStakeByTokenBalance(val)
                                                    }}
                                                />
                                                <span className="ml-2">{stakeByTokenSymbol}</span>
                                            </div>
                                            { ApprovalState.UNKNOWN === approvalState && <div className="w-2 mx-auto">
                                                <Loader stroke="black" />
                                            </div>}
                                            { (ApprovalState.NOT_APPROVED === approvalState || ApprovalState.PENDING === approvalState) && (
                                                <Button
                                                    disabled={ApprovalState.PENDING === approvalState}
                                                    onClick={approve}
                                                    className="w-full border-gradient py-2 font-bold text-center text-high-emphesis disabled:cursor-not-allowed"
                                                >
                                                    { ApprovalState.PENDING === approvalState ? i18n._(t`Approving`) : i18n._(t`Approve`)}
                                                </Button>
                                            ) }
                                            { ApprovalState.APPROVED === approvalState && (
                                                <Button
                                                    color="gradient3"
                                                    disabled={isCommiting || stakeByTokenBalance === ''}
                                                    onClick={async () => {
                                                        try {
                                                            setIsCommiting(true)
                                                            const response = await stakeContract?.functions.enter(stakeByTokenBalance.toBigNumber(decimals))
                                                            addTransaction(response, {
                                                                summary: 'Stake commited!'
                                                            })
                                                            setStakeByTokenBalance('')
                                                            setIsCommiting(false)
                                                        } catch (err) {
                                                            console.error(err)
                                                            setIsCommiting(false)
                                                        }
                                                    }}
                                                    className="w-full border border-black py-2 font-bold text-center text-black disabled:cursor-not-allowed"
                                                >
                                                    {i18n._(t`STAKE`)}
                                                </Button>
                                            ) }
                                        </div>}
                                    </div>
                                ) : (
                                    <Web3Status />
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </BackgroundMain>
        </>
    )
}

export default StakePage
