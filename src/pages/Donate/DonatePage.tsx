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
import { BigNumber } from 'ethers'
import { useTransactionAdder } from '../../state/transactions/hooks'
import styled from 'styled-components'
import { useTokenDetail } from './useTokenDetail'
import { Token } from 'dfy-sdk'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { donateTokenListByChainId, DonateTokenList } from '../../constants/donate-token'
import Loader from 'components/Loader'
import { BiDonateHeart } from 'react-icons/bi'
import Confetti from 'react-confetti'
import Countdown from 'react-countdown'

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(209, 105, 174, 0.3);
`

const ModalBody = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    --webkit-transform: translate(-50%, -50%);
    padding: 25px;
    min-width: 400px;
    backdrop-filter: blur(9px) saturate(180%);
    -webkit-backdrop-filter: blur(9px) saturate(180%);
    background-color: rgba(40, 17, 36, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    
`
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

const numberWithCommas = (x: string) => {
    return x.toString().replace(/(\.\d+)|(?=(?:\d{3})+\b)(?!\b)/g, function(m, $1) { return $1 || ',' })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function DonatePage({
    match: {
        params: {address}
    }}: RouteComponentProps<{ address: string }>)
{

    const history = useHistory()

    const { i18n } = useLingui()

    const { account, chainId } = useActiveWeb3React()

    const [showConfetti, setShowConfetti] = useState(false)

    const [donateDetail, setDonateDetail] = useState<DonateTokenList>()
    
    const [donatedBalance, setDonatedBalance] = useState('0')
    const [isLoadingEndDate, setIsLoadingEndDate] = useState(true)

    const [donateTokenBalance, setDonateTokenBalance] = useState('')
    const [isCommiting, setIsCommiting] = useState(false)

    const [totalStakedBalance, setTotalStakedBalance] = useState('0')
    
    const [endDate, setEndDate] = useState(new Date())

    const [stakeByTokenName, stakeByTokenSymbol, stakeByTokenDecimals] = useTokenDetail(donateDetail?.stakeByToken?.address, account)
    const stakeByTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, donateDetail?.stakeByToken ? new Token(chainId ?? 0, donateDetail?.stakeByToken?.address, stakeByTokenDecimals, stakeByTokenSymbol, stakeByTokenName) : undefined)

    const decimals = stakeByTokenDecimals

    const [stakeTokenName, stakeTokenSymbol, stakeTokenDecimals] = useTokenDetail(donateDetail?.stakeToken?.address, account)
    const stakeTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, donateDetail?.stakeToken ? new Token(chainId ?? 0, donateDetail?.stakeToken?.address, stakeTokenDecimals, stakeTokenSymbol, stakeTokenName) : undefined)

    const [donationTokenName, donationTokenSymbol, donationTokenDecimals] = useTokenDetail(donateDetail?.rewardPointToken?.address, account)
    const donationTotalCurrencyAmount = useCurrencyBalance(donateDetail?.acceptDonateWallet ?? undefined, donateDetail?.rewardPointToken ? new Token(chainId ?? 0, donateDetail?.rewardPointToken?.address, donationTokenDecimals, donationTokenSymbol, donationTokenName) : undefined)

    const [approvalState, approve] = useApproveCallback(stakeByTokenCurrencyAmount, donateDetail?.stakeToken ? donateDetail?.stakeToken.address : '')
    const addTransaction = useTransactionAdder()

    const stakeContract = useTokenineStakeContract(donateDetail?.contractAddress ?? '')

    const onMax = () => {
        setDonateTokenBalance(
            stakeByTokenCurrencyAmount ? stakeByTokenCurrencyAmount.toExact() : ''
        )
    }

    useEffect(() => {
        if (!chainId) return
        const checkDonateDetail = donateTokenListByChainId[chainId][address]
        if (!address || (address && address === '')
            || !checkDonateDetail
            || (checkDonateDetail && !checkDonateDetail.available)
            || new Date().getTime() < checkDonateDetail.startTime.getTime())
        {
            history.push('/donate')
            return
        }
        setDonateDetail(checkDonateDetail)
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
    }, [address, history, chainId, stakeContract?.functions, decimals, stakeTokenCurrencyAmount])

    const calculateDonateAmount = async (_amount: BigNumber) => {
        const amount = await stakeContract?.functions.calculateRewardPoint(_amount)
        if (amount) {
            return amount[0]
        }
        return BigNumber.from(0)
    }

    return (
        <>
            {' '}
            <Helmet>
                <title>Pool for donation | DFY</title>
            </Helmet>
            <BackgroundMain className="w-screen">
                {showConfetti && <Modal>
                    <ModalBody className="text-white">
                        {donateDetail?.thankWord?.title && <h1 className="text-center font-bold text-h1 mb-5">{donateDetail?.thankWord?.title}</h1>}
                        <p className="text-center">
                            {donateDetail?.thankWord?.content.replace('{{token}}', stakeByTokenSymbol).replace('{{amount}}', donatedBalance)}
                        </p>
                    </ModalBody>
                </Modal>}
                <Confetti
                    recycle={false}
                    numberOfPieces={showConfetti ? 500 : 0}
                    tweenDuration={8000}
                    className="w-screen h-screen z-50"
                    onConfettiComplete={confetti => {
                        if (confetti) {
                            setShowConfetti(false)
                            confetti.reset()
                        }
                    }}
                ></Confetti>

                <div className="relative flex flex-col items-center">

                <div className="container mx-auto max-w-3xl">
                    <div className="font-bold text-center text-4xl text-black my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Pool for donation`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl  rounded border border-black">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-black">
                            {donateDetail && donateDetail.detailImage && <div className="text-center mb-10">
                                <img alt="Social Giving" src={donateDetail.detailImage} className="inline-block w-1/2" />
                            </div>}
                            <p className="text-h3 mb-5">Social Giving</p>
                            <div dangerouslySetInnerHTML={{__html: donateDetail ? donateDetail.proposalContent : ''}} />
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
                                        <p className="text-black mb-3">Total Staking:</p> 
                                        <p className="text-center text-black text-h2">
                                        { totalStakedBalance } {stakeByTokenSymbol}
                                        </p>
                                    </Card>
                                    <Card className="border border-black mb-10">
                                        <p className="text-black mb-3">Total donation:</p> 
                                        <p className="text-center text-black text-h2">
                                        { donationTotalCurrencyAmount ? numberWithCommas(donationTotalCurrencyAmount.toSignificant(6)) : 0 } {donationTokenSymbol}
                                        </p>
                                    </Card> 
                                    <Card className="border border-black mb-10">
                                        <p className="text-black mb-3">Your Staking:</p> 
                                        <p className="text-center text-black text-h2">
                                        { stakeTokenCurrencyAmount ? numberWithCommas(stakeTokenCurrencyAmount.toSignificant(6)) : 0 } {stakeByTokenSymbol}
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
                                        <div>
                                            
                                            { endDate.getTime() <= new Date().getTime() && !isLoadingEndDate  ? <div>
                                            <Button
                                                color="gradient3"
                                                disabled={isCommiting || !stakeTokenCurrencyAmount || stakeTokenCurrencyAmount?.toExact() === '0'}
                                                onClick={async () => {
                                                    try {
                                                        setIsCommiting(true)
                                                        const response = await stakeContract?.functions.leave(stakeTokenCurrencyAmount?.toExact().toBigNumber(decimals))
                                                        addTransaction(response, {
                                                            summary: 'Claim committed!'
                                                        })
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
                                                    value={donateTokenBalance}
                                                    onUserInput={val => {
                                                        setDonateTokenBalance(val)
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
                                                    disabled={isCommiting || donateTokenBalance === '0' || donateTokenBalance === ''}
                                                    onClick={async () => {
                                                        try {
                                                            setIsCommiting(true)
                                                            const donateBlanceBigNum = donateTokenBalance.toBigNumber(decimals)
                                                            const response = await stakeContract?.functions.enter(donateBlanceBigNum)
                                                            addTransaction(response, {
                                                                summary: 'Thank you for donation and staking'
                                                            })
                                                            const donateAmount = await calculateDonateAmount(donateBlanceBigNum)
                                                            setDonatedBalance(donateAmount.toFixed(decimals))
                                                            setShowConfetti(true)
                                                            setDonateTokenBalance('')
                                                            setIsCommiting(false)
                                                        } catch (err) {
                                                            console.error(err)
                                                            setIsCommiting(false)
                                                        }
                                                    }}
                                                    className="w-full border border-black py-2 font-bold text-center text-black disabled:cursor-not-allowed"
                                                >
                                                    {i18n._(t`STAKE & DONATE`)}
                                                </Button>
                                            ) }
                                        </div>}
                                        </div>
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

export default DonatePage
