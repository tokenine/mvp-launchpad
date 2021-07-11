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
import { useTokenContract } from 'hooks/useContract'
import { AiOutlineArrowDown, AiOutlineCopy } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { FaCoins } from 'react-icons/fa'
import { shortenAddress } from '../../utils'
import useCopyClipboard from '../../hooks/useCopyClipboard'
import { Token } from 'dfy-sdk'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { donateTokenListByChainId, DonateTokenList } from '../../constants/donate-token'
import Loader from 'components/Loader'
import { BiDonateHeart } from 'react-icons/bi'
import Confetti from 'react-confetti'

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(105, 209, 113, 0.5);
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
    background-color: rgba(17, 40, 22, 0.75);
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

    const [endDate, setEndDate] = useState(new Date())
    const [countDown, setCountDown] = useState<{
        days: number
        hours: number
        minutes: number
        seconds: number
    }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [stakeByTokenName, stakeByTokenSymbol, stakeByTokenDecimals] = useTokenDetail(donateDetail?.stakeByToken?.address, account)
    const stakeByTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, donateDetail?.stakeByToken ? new Token(chainId ?? 0, donateDetail?.stakeByToken?.address, stakeByTokenDecimals, stakeByTokenSymbol, stakeByTokenName) : undefined)

    const decimals = stakeByTokenDecimals

    const [stakeTokenName, stakeTokenSymbol, stakeTokenDecimals] = useTokenDetail(donateDetail?.stakeToken?.address, account)
    const stakeTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, donateDetail?.stakeToken ? new Token(chainId ?? 0, donateDetail?.stakeToken?.address, stakeTokenDecimals, stakeTokenSymbol, stakeTokenName) : undefined)

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
            || (checkDonateDetail && !checkDonateDetail.available))
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
            } catch (err) {
                console.error(err)
                setIsLoadingEndDate(false)
            }
        }
        getMVPStakeDetail()
    }, [address, history, chainId, stakeContract?.functions])

    useEffect(() => {
        const interval = setInterval(() => {
            const distance = endDate.getTime() - new Date().getTime()
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setCountDown({
                    days,
                    hours,
                    minutes,
                    seconds
                })
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [endDate])

    return (
        <>
            {' '}
            <Helmet>
                <title>Donate | DFY</title>
            </Helmet>
            <BackgroundMain className="navbar-bg-green-thick-to-thin w-screen">
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
                    <div className="font-bold text-center text-4xl text-white my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Donate`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl  rounded border border-white">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-white">
                            {donateDetail && donateDetail.imageTokenUrl && <div className="text-center mb-10">
                                <img alt="launchpad" src={donateDetail.imageTokenUrl} className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                            </div>}
                            <p className="text-h3 mb-5">Proposal Details</p>
                            <div dangerouslySetInnerHTML={{__html: donateDetail ? donateDetail.proposalContent : ''}} />
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                {stakeByTokenName && stakeByTokenSymbol && stakeByTokenDecimals ? <div>
                                    <div className="flex mb-10 ">
                                        <div className="pr-5 text-white text-center border-r border-white">
                                            <p className="text-h1 font-bold">{stakeByTokenSymbol}</p>
                                            <p>{stakeByTokenName}</p>
                                        </div>
                                        <div className="text-white ml-5">
                                            <div>Time Remain:</div>
                                            <div>
                                                {countDown.days}d {countDown.hours}h {countDown.minutes}m {countDown.seconds}s
                                            </div>
                                        </div>
                                    </div>
                                    <Card className="border border-white mb-10">
                                        <p className="text-white mb-3">Staked:</p> 
                                        <p className="text-center text-white text-h2">
                                        { stakeTokenCurrencyAmount ? stakeTokenCurrencyAmount.toSignificant(6) : 0 } {stakeTokenSymbol}
                                        </p>
                                    </Card> 
                                </div> : <div className="w-2 mx-auto mb-10">
                                    <Loader stroke="white" />
                                </div>}
                                {account ? (
                                    <div>
                                        <div className="text-white text-right text-caption2">
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
                                                            summary: 'Stake commited!'
                                                        })
                                                        setIsCommiting(false)
                                                    } catch (err) {
                                                        console.error(err)
                                                        setIsCommiting(false)
                                                    }
                                                }}
                                                className="w-full border border-white py-2 mb-5 font-bold text-center text-white disabled:cursor-not-allowed"
                                            >
                                                {i18n._(t`CLAIM BACK`)}
                                            </Button>
                                        </div> : <div>
                                            <div className="flex items-center rounded bg-white space-x-3 p-3 w-full mb-5">
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
                                                    value={donateTokenBalance}
                                                    onUserInput={val => {
                                                        setDonateTokenBalance(val)
                                                    }}
                                                />
                                                <span className="ml-2">{stakeByTokenSymbol}</span>
                                            </div>
                                            { ApprovalState.UNKNOWN === approvalState && <div className="w-2 mx-auto">
                                                <Loader stroke="white" />
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
                                                            const response = await stakeContract?.functions.enter(donateTokenBalance.toBigNumber(decimals))
                                                            addTransaction(response, {
                                                                summary: 'Thank you for donation'
                                                            })
                                                            setShowConfetti(true)
                                                            setDonatedBalance(donateTokenBalance)
                                                            setDonateTokenBalance('')
                                                            setIsCommiting(false)
                                                        } catch (err) {
                                                            console.error(err)
                                                            setIsCommiting(false)
                                                        }
                                                    }}
                                                    className="w-full border border-white py-2 font-bold text-center text-white disabled:cursor-not-allowed"
                                                >
                                                    {i18n._(t`DONATE`)}
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
