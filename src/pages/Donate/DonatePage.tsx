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
import { StakeTokenList } from '../../constants/stake-token'
import { donateTokenListByChainId } from '../../constants/donate-token'
import Loader from 'components/Loader'
import { BiDonateHeart } from 'react-icons/bi'
 
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

    const [stakeDetail, setStakeDetail] = useState<StakeTokenList>()
    
    const [stakeByTokenBalance, setStakeByTokenBalance] = useState('')
    const [isCommiting, setIsCommiting] = useState(false)

    const [stakeByTokenName, stakeByTokenSymbol, stakeByTokenDecimals] = useTokenDetail(stakeDetail?.stakeByToken?.address, account)
    const stakeByTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, stakeDetail?.stakeByToken ? new Token(chainId ?? 0, stakeDetail?.stakeByToken?.address, stakeByTokenDecimals, stakeByTokenSymbol, stakeByTokenName) : undefined)

    const decimals = stakeByTokenDecimals

    const [stakeTokenName, stakeTokenSymbol, stakeTokenDecimals] = useTokenDetail(stakeDetail?.stakeToken?.address, account)
    const stakeTokenCurrencyAmount = useCurrencyBalance(account ?? undefined, stakeDetail?.stakeToken ? new Token(chainId ?? 0, stakeDetail?.stakeToken?.address, stakeTokenDecimals, stakeTokenSymbol, stakeTokenName) : undefined)

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
        const checkStakeDetail = donateTokenListByChainId[chainId][address]
        if (!address || (address && address === '')
            || !checkStakeDetail
            || (checkStakeDetail && !checkStakeDetail.available))
        {
            history.push('/stake')
            return
        }
        setStakeDetail(checkStakeDetail)
    }, [address, history, chainId])

    return (
        <>
            {' '}
            <Helmet>
                <title>Donate | DFY</title>
            </Helmet>
            <BackgroundMain className="navbar-bg-green-thick-to-thin w-screen">

                <div className="relative flex flex-col items-center">
                    {/* <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" /> */}

                <div className="container mx-auto max-w-3xl">
                    <div className="font-bold text-center text-4xl text-white my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Donate`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl  rounded border border-white">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-white">
                            {stakeDetail && stakeDetail.imageTokenUrl && <div className="text-center mb-10">
                                <img alt="launchpad" src={stakeDetail.imageTokenUrl} className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                            </div>}
                            <p className="text-h3 mb-5">Proposal Details</p>
                            <div dangerouslySetInnerHTML={{__html: stakeDetail ? stakeDetail.proposalContent : ''}} />
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                {stakeByTokenName && stakeByTokenSymbol && stakeByTokenDecimals ? <div>
                                    <div className="flex mb-10 ">
                                        <div className="pr-5 text-white text-center border-r border-white">
                                            <p className="text-h1 font-bold">{stakeByTokenSymbol}</p>
                                            <p>{stakeByTokenName}</p>
                                        </div>
                                    </div>
                                    <Card className="border border-white mb-10">
                                        <p className="text-white mb-3">Total Donate Amount:</p> 
                                        <p className="text-center text-white text-h2">
                                        { stakeTokenCurrencyAmount ? stakeTokenCurrencyAmount.toSignificant(6) : 0 } {stakeByTokenSymbol}
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
                                                    value={stakeByTokenBalance}
                                                    onUserInput={val => {
                                                        setStakeByTokenBalance(val)
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
                                                    disabled={isCommiting}
                                                    onClick={async () => {
                                                        try {
                                                            setIsCommiting(true)
                                                            const response = await stakeContract?.functions.enter(stakeByTokenBalance.toBigNumber(decimals))
                                                            addTransaction(response, {
                                                                summary: 'Thank you for donation'
                                                            })
                                                            setStakeByTokenBalance('')
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
