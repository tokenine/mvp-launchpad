import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import NumericalInput from 'components/NumericalInput'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { useToken } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Button } from 'components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { JSBI, Token, TokenAmount } from 'dfy-sdk'
import { RouteComponentProps } from 'react-router-dom'
import { useMVPToMEV } from 'constants/mvptomev'
import { useTransactionAdder } from 'state/transactions/hooks'

const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

const SwitchDiv = styled.div`
    display: inline-block;
    background-color: #e4e4e4;
    border-radius: 25px;
    overflow: hidden;
    cursor: pointer;
    font-weight: bold;
    div {
        display: inline-block;
        padding: 10px 20px;
    }
    .active {
        background-color: #f47c94;
        border-radius: 25px;
        color: white;
    }
`

const MevToMvp = ({
    match: {
        params: { address }
    }
}: RouteComponentProps<{ address: string }>): JSX.Element => {
    const { i18n } = useLingui()
    const [active, setActive] = useState(true)
    const { account, chainId } = useActiveWeb3React()
    const Web3 = require('web3')

    const mvpmevtoken = useMVPToMEV(chainId)
    const useMevTokenContact = useToken(mvpmevtoken?.mev)
    const useMvpTokenContact = useToken(mvpmevtoken?.mvp)
    const [spender, setSpender] = useState('')

    const [tokenAmount, setTokenAmount] = useState('0')
    const [tokenSymbol, setTokenSymbol] = useState('')
    const [balanceMVP, setBalanceMVP] = useState(0)
    const [balanceMEV, setBalanceMEV] = useState(0)
    const [symbolMEV, setSymbolMEV] = useState()
    const [symbolMVP, setSymbolMVP] = useState()

    const addTransaction = useTransactionAdder()
    const [currentBalance, setCurrentBalance] = useState(0)
    const [currencyAmount, setCurrencyAmount] = useState<TokenAmount>()
    const [approvalState, approve] = useApproveCallback(currencyAmount, spender)

    const onActiveToggle = () => {
        setActive(!active)
    }

    useEffect(() => {
        const fetchBalanceToken = async () => {
            try {
                const decimals = await useMevTokenContact?.decimals()
                const balanceMEV = await useMevTokenContact?.balanceOf(account)
                const symbolMEV = await useMevTokenContact?.symbol()
                const balanceMVP = await useMvpTokenContact?.balanceOf(account)
                const symbolMVP = await useMvpTokenContact?.symbol()
                setBalanceMVP(balanceMVP.toFixed(decimals))
                setSymbolMVP(symbolMVP)
                setBalanceMEV(balanceMEV.toFixed(decimals))
                setSymbolMEV(symbolMEV)
            } catch (err) {
                console.error(err)
            }
        }
        fetchBalanceToken()
        const fetchTokenDetail = async () => {
            try {
                if (useMevTokenContact && chainId && !active) {
                    const decimals = await useMevTokenContact?.decimals()
                    const tokenName = await useMevTokenContact?.name()
                    const symbol = await useMevTokenContact?.symbol()
                    const balance = await useMevTokenContact?.balanceOf(account)
                    const priceAmount = JSBI.BigInt(balance)
                    const tokenAmount = new Token(chainId, mvpmevtoken.mvp, decimals ?? 18, symbol, tokenName)
                    setSpender(mvpmevtoken.mev)
                    setCurrentBalance(balance.toFixed(decimals))
                    setTokenSymbol(symbol)
                    setCurrencyAmount(new TokenAmount(tokenAmount, priceAmount))

                } else if (useMvpTokenContact && chainId && active) {
                    const decimals = await useMvpTokenContact?.decimals()
                    const tokenName = await useMvpTokenContact?.name()
                    const symbol = await useMvpTokenContact?.symbol()
                    const balance = await useMvpTokenContact?.balanceOf(account)
                    const priceAmount = JSBI.BigInt(balance)
                    const tokenAmount = new Token(chainId, mvpmevtoken.mev, decimals ?? 18, symbol, tokenName)
                    setSpender(mvpmevtoken.mvp)
                    setCurrentBalance(balance.toFixed(decimals))
                    setTokenSymbol(symbol)
                    setCurrencyAmount(new TokenAmount(tokenAmount, priceAmount))
                    
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchTokenDetail()
    }, [account, chainId, useMevTokenContact, active, useMvpTokenContact, address, mvpmevtoken])

    const onMax = () => {
        setTokenAmount(currentBalance.toString())
    }

    const MvpToMev = async () => {
        try {
            const amount = Web3.utils.toWei(tokenAmount)            
            const respone = await useMevTokenContact?.mint(amount)
            addTransaction(respone, {
                summary: 'MVP To MEV'
            })
        } catch (err) {
            console.error(err)
        }
    }

    const MevToMvp = async () => {
        try {
            const amount = Web3.utils.toWei(tokenAmount)
            const respone = await useMevTokenContact?.redeem(amount)
            addTransaction(respone, {
                summary: 'MEV To MVP'
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Helmet>
                <title>Pool | DFY</title>
            </Helmet>
            <BackgroundMain className="w-screen">
                <div className="relative flex flex-col items-center">
                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-black my-14">
                            {i18n._(t`Swap MEV to MVP`)}
                        </div>
                    </div>
                    <div className="border-black border rounded-md p-6 w-2/5">
                        <div className="text-center mb-14">
                            <SwitchDiv>
                                <div className={active ? 'active' : ''} onClick={onActiveToggle}>
                                    MVP to MEV
                                </div>
                                <div className={!active ? 'active' : ''} onClick={onActiveToggle}>
                                    MEV to MVP
                                </div>
                            </SwitchDiv>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                Balance: {balanceMVP} {symbolMVP}
                            </p>
                            <p>
                                Balance: {balanceMEV} {symbolMEV}
                            </p>
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center rounded bg-white border border-black space-x-3 p-3 w-full">
                                <Button
                                    onClick={onMax}
                                    size={'small'}
                                    className="bg-transparent hover:bg-primary hover:text-black border border-gray-500 rounded-full text-gray-500 text-base px-4 py-0 font-medium whitespace-nowrap"
                                >
                                    MAX
                                </Button>
                                <NumericalInput
                                    className="token-amount-input text-right text-black"
                                    value={tokenAmount}
                                    onUserInput={tokenAmount => {
                                        setTokenAmount(tokenAmount)
                                    }}
                                />{' '}
                                <p>{tokenSymbol}</p>
                            </div>
                        </div>
                        {(ApprovalState.NOT_APPROVED === approvalState || ApprovalState.PENDING === approvalState) && (
                            <Button
                                disabled={ApprovalState.PENDING === approvalState}
                                onClick={approve}
                                color="gradient3"
                                className="text-center"
                            >
                                {ApprovalState.PENDING === approvalState ? 'Approving...' : 'Approve'}
                            </Button>
                        )}
                        {ApprovalState.APPROVED === approvalState && active && (
                            <Button color="gradient3" onClick={MvpToMev}>
                                Swap
                            </Button>
                        )}
                        {ApprovalState.APPROVED === approvalState && !active && (
                            <Button color="gradient3" onClick={MevToMvp}>
                                Swap
                            </Button>
                        )}
                    </div>
                </div>
            </BackgroundMain>
        </>
    )
}
export default MevToMvp
