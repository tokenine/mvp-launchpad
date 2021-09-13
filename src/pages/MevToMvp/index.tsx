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

    const useMevTokenContact = useToken(address)
    const useMvpTokenContact = useToken('0x3379A0BdF5A5CB566127C421782686BA0f80490a')

    const [tokenAmount, setTokenAmount] = useState('0')
    const [tokenSymbol, setTokenSymbol] = useState('')

    const [currentBalance, setCurrentBalance] = useState('0')
    const [currencyAmount, setCurrencyAmount] = useState<TokenAmount>()
    const [approvalState, approve] = useApproveCallback(currencyAmount, account ?? '')

    const onActiveToggle = () => {
        setActive(!active)
    }

    useEffect(() => {
        const fetchTokenDetail = async () => {
            try {
                if (useMevTokenContact && chainId && !active) {
                    const decimals = await useMevTokenContact?.decimals()
                    const tokenName = await useMevTokenContact?.name()
                    const symbol = await useMevTokenContact?.symbol()
                    const balance = await useMevTokenContact?.balanceOf(account)
                    const priceAmount = JSBI.BigInt(await useMevTokenContact?.totalSupply())
                    const tokenAmount = new Token(
                        chainId,
                        address,
                        decimals ?? 18,
                        symbol,
                        tokenName
                    )
                    console.log(tokenName)
                    setCurrentBalance(balance.toFixed(decimals))
                    setTokenSymbol(symbol)
                    setCurrencyAmount(new TokenAmount(tokenAmount, priceAmount))

                } else if (useMvpTokenContact && chainId && active) {
                    const decimals = await useMvpTokenContact?.decimals()
                    const tokenName = await useMvpTokenContact?.name()
                    const symbol = await useMvpTokenContact?.symbol()
                    const balance = await useMvpTokenContact?.balanceOf(account)
                    const priceAmount = JSBI.BigInt(await useMvpTokenContact?.totalSupply())
                    const tokenAmount = new Token(chainId, '0x3379A0BdF5A5CB566127C421782686BA0f80490a', decimals ?? 18, symbol, tokenName)
                    console.log(tokenName)
                    setCurrentBalance(balance.toFixed(decimals))
                    setTokenSymbol(symbol)
                    setCurrencyAmount(new TokenAmount(tokenAmount, priceAmount))
                    
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchTokenDetail()
    }, [account, chainId, useMevTokenContact, active, useMvpTokenContact, address])

    const onMax = () => {
        setTokenAmount(currentBalance.toString())
    }

    const MvpToMev = async () => {
        try {
            const amount = Web3.utils.toWei(tokenAmount)
            await useMevTokenContact?.mint(Web3.utils.toWei(amount))
        } catch (err) {
            console.error(err)
        }
    }

    const MevToMvp = async () => {
        try {
            const amount = Web3.utils.toWei(tokenAmount)
            await useMevTokenContact?.redeem(Web3.utils.toWei(amount))
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
