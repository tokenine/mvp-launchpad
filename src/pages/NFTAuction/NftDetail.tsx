import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import teslacar from 'assets/images/teslacar.jpg'
import styled from 'styled-components'
import { Button, Card } from 'components'
import NumericalInput from 'components/NumericalInput'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { useAuctionContract, useTokenContract } from 'hooks/useContract'
import { RouteComponentProps } from 'react-router-dom'
import { useWalletModalToggle } from 'state/application/hooks'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { JSBI, Token, TokenAmount, ChainId } from 'dfy-sdk'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useNFTAuction } from 'constants/nft-auction'
import { shortenAddress } from 'utils'
import { useTransactionAdder } from 'state/transactions/hooks'

const BackgroundMain = styled.div`
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
`
const CardImage = styled.img`
    object-fit: contain;
    opacity: 1;
`
const ImageWrapper = styled.div`
    max-height: 743px;
    max-width: 577px;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: auto;
    }
`

interface Item {
    address: string
    price: string
}

const NftDetail = ({
    match: {
        params: { address }
    }
}: RouteComponentProps<{ address: string }>): JSX.Element => {
    const [startPrice, setStartPrice] = useState('0.00000')
    const [topBidAdress, setTopBidAddress] = useState('Your are first bid')
    const [topBid, setTopBid] = useState('0')
    const [bidPercentIncrement, setBidPercentIncrement] = useState(0)
    const [yourbid, setYourBid] = useState('0')
    const [endTimeDate, setEndTimeDate] = useState<string>()
    const [auctionState, setAuctionState] = useState<Boolean>(true)

    const [imgURL, setImgURL] = useState('')
    const { account } = useWeb3React()
    const Web3 = require('web3')
    const addTransaction = useTransactionAdder()

    const [warningText, setWarningText] = useState('')
    const [warning, setWarning] = useState(false)

    const { chainId } = useActiveWeb3React()
    const auctioncontract = useNFTAuction(chainId)
    const itemcontract = useAuctionContract(auctioncontract?.auction)
    const tokenContract = useTokenContract(auctioncontract?.token)

    const [tokenSymbol, setTokenSymbol] = useState('')
    const [historyBid, setHistoryBid] = useState<Item[]>([])
    const [active, setActive] = useState<Boolean>(false)
    const [currenBalance, setCurrentBalance] = useState<string>()
    const [decimal, setDecimal] = useState<number>(18)

    const [currencyAmount, setCurrencyAmount] = useState<TokenAmount>()
    const [approvalState, approve] = useApproveCallback(currencyAmount, auctioncontract?.auction)

    const time = (timeinput: number) => {
        if (timeinput < 10) {
            return '0' + timeinput.toString()
        } else {
            return timeinput.toString()
        }
    }

    useEffect(() => {
        const getEndTime = async () => {
            const item = await itemcontract?.artItems(address)
            const active = item.active
            setActive(active)
            const date = new Date(item.endTime * 1000)
            const dayy = date.getDate()
            const monthh = date.getMonth() + 1
            const yearr = date.getFullYear()
            const hhour = date.getHours()
            const minutee = date.getMinutes()
            const secondd = date.getSeconds()
            const timeend =
                time(dayy) +
                '/' +
                time(monthh) +
                '/' +
                time(yearr) +
                ' ' +
                time(hhour) +
                ':' +
                time(minutee) +
                ':' +
                time(secondd)
            setEndTimeDate(timeend)
            if (date.getTime() < Date.now()) {
                setAuctionState(false)
            } else {
                setAuctionState(true)
            }
        }
        const getItemData = async () => {
            const tokenURI = await itemcontract?.artItems(address)

            setImgURL(tokenURI[0])
            setStartPrice(Web3.utils.fromWei(tokenURI.startPrice.toString()))
        }
        getEndTime()
        getItemData()
    }, [Web3.utils, address, itemcontract])

    useEffect(() => {
        const fetchTokenDetail = async () => {
            try {
                if (tokenContract && chainId) {
                    const symbol = await tokenContract?.symbol()
                    const name = await tokenContract?.name()
                    const decimal = await tokenContract?.decimals()
                    const balance = await tokenContract?.balanceOf(account)
                    const priceAmount = JSBI.BigInt(await tokenContract.totalSupply())
                    const tokenAmount = new Token(chainId, auctioncontract?.token, decimal, symbol, name)

                    setCurrentBalance(balance.toFixed(decimal))
                    setTokenSymbol(symbol)
                    setDecimal(decimal)
                    setCurrencyAmount(new TokenAmount(tokenAmount, priceAmount))
                }
            } catch (err) {
                console.error('err', err)
            }
        }
        fetchTokenDetail()
    }, [account, auctioncontract, chainId, tokenContract])

    useEffect(() => {
        const topBid = async () => {
            try {
                if (historyBid.length !== 0) {
                    const topBid = await itemcontract?.getTopBid(address)
                    const topBidAddress = topBid.bidder
                    const topBidPrice = topBid.price
                    setTopBidAddress(
                        topBidAddress.substring(0, 8) +
                            '...' +
                            topBidAddress?.substring(topBidAddress.length - 8, topBidAddress.length)
                    )
                    setTopBid(Web3.utils.fromWei(topBidPrice.toString()))
                }
                const bidPercentIncrement = await itemcontract?.bidPercentIncrement()
                setBidPercentIncrement(Web3.utils.fromWei(bidPercentIncrement.toString()))
            } catch (err) {
                console.error(err)
                setTopBid(startPrice)
            }
        }

        topBid()
    })

    useEffect(() => {
        const getBidsList = async () => {
            try {
                const listitem = await itemcontract?.getBidsList(address)
                const decimal = await tokenContract?.decimals()
                setHistoryBid([])
                for (let i = 0; i < listitem.length; i++) {
                    const address = listitem[i][0]
                    const price = listitem[i][1]
                    setHistoryBid(oldArray => [...oldArray, { address: address, price: price.toFixed(decimal) }])
                }
            } catch (err) {
                console.error(err)
                setHistoryBid([])
            }
        }
        getBidsList()
    }, [address, itemcontract, tokenContract, topBid])

    const Bidding = async () => {
        const bid = Web3.utils.toWei(yourbid)

        try {
            const response = await itemcontract?.bid(address, bid)
            addTransaction(response, {
                summary: 'Bidded'
            })
        } catch (err) {
            console.error(err)
        }
    }

    const CheckAllowBid = async (yourbid: string) => {
        // const bigyourbid = yourbid.toBigNumber(decimal)
        try {
            if (historyBid.length !== 0) {
                const bidPercentIncrement = await itemcontract?.bidPercentIncrement()
                const topBid = await itemcontract?.getTopBid(address)
                const topBidPrice = topBid.price
                const twentypercent = topBidPrice.muldiv(bidPercentIncrement.toFixed(decimal), 100)
                const result = topBidPrice.add(twentypercent)
                // const bidIncretment = ((100 + Number(bidPercentIncrement)) / 100) * Number(topBid)
                console.log('bidIncretment', result.toFixed(decimal))
                console.log('bid', yourbid)

                if (Number(yourbid) >= result.toFixed(decimal)) {
                    setWarningText('Your bid is Allow')
                    setWarning(false)
                } else {
                    const percent = bidPercentIncrement.toFixed(decimal)
                    const pricein = result.toFixed(decimal)
                    const warring = 'Bid Incerment is ' + percent + '% , Please insert your bid up to ' + pricein
                    setWarningText(warring)
                    setWarning(true)
                }
            } else {
                if (Number(yourbid) >= Number(startPrice)) {
                    setWarningText('Allow Bid ')
                    setWarning(false)
                } else {
                    const warring = 'Please insert your bid up to ' + startPrice
                    setWarningText(warring)
                    setWarning(true)
                }
            }
        } catch (err) {
            console.error(err)
        }
    }

    const claimReward = async () => {
        try {
            const response = await itemcontract?.claim(address)
            addTransaction(response, {
                summary: 'Claim Reward'
            })
        } catch (err) {
            console.error(err)
        }
    }

    const calculatetwentypercent = async () => {
        try {
            const bidPercentIncrement = await itemcontract?.bidPercentIncrement()
            if (historyBid.length !== 0) {
                const topBid = await itemcontract?.getTopBid(address)
                const topBidPrice = topBid.price
                const twentypercent = topBidPrice.muldiv(bidPercentIncrement.toFixed(decimal), 100)
                const result = topBidPrice.add(twentypercent)
                if (topBid) {
                    setYourBid(result.toFixed(decimal))
                    CheckAllowBid(result.toFixed(decimal))
                } else {
                    CheckAllowBid(yourbid)
                }
            } else {
                setYourBid(startPrice)
                CheckAllowBid(startPrice)
            }
        } catch (err) {
            console.error(err)
            CheckAllowBid(yourbid)
        }
    }

    return (
        <>
            <Helmet>
                <title>Auction | MEV</title>
            </Helmet>
            <BackgroundMain>
                <div className="container mx-auto max-w-5xl mt-10  rounded overflow-hidden">
                    <div className="grid grid-flow-auto grid-cols-2 bg-white">
                        <Card className="flex justify-center col-span-2 md:col-span-1 rounded-none">
                            <img alt="sa" src={imgURL} />
                            {/* <ImageWrapper className="border border-gray-200 rounded-md overflow-hidden mx-auto mb-3">
                                <CardImage alt={'marketplaceimg'} src={teslacar} />
                            </ImageWrapper> */}
                        </Card>
                        <Card className="justify-center col-span-2 md:col-span-1 rounded-none w-full">
                            <div className="relative w-full ">
                                {auctionState && (
                                    <div>
                                        <div className="text-black">
                                            <p>Start price:</p>
                                            <p className="text-2xl">
                                                {startPrice} {tokenSymbol}
                                            </p>
                                        </div>
                                        <div className="text-black">
                                            <p>EndTime:</p>
                                            <p className="text-2xl">{endTimeDate}</p>
                                        </div>
                                        <div className="text-black">
                                            <p>Top Bid Address: </p>
                                            <p className="text-2xl">{topBidAdress}</p>
                                        </div>
                                        <div className="text-black">
                                            <p>Top Bid: </p>
                                            <p className="text-2xl">
                                                {topBid} {tokenSymbol}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {!auctionState && (
                                    <div className="flex-row">
                                        <div className="text-black">
                                            <p className="text-base">Winner Bid Address: </p>
                                            <p className="text-3xl">{topBidAdress}</p>
                                        </div>
                                        <div className="text-black">
                                            <p className="text-base">Winner Bid:</p>
                                            <p className="text-3xl">
                                                {topBid} {tokenSymbol}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {!auctionState && active && (
                                    <div className="mt-8">
                                        <p className="text-3xl text-center text-red-500 mb-4">Auction End</p>
                                        {account === topBidAdress && active && (
                                            <Button color="gradient3" onClick={claimReward}>
                                                Claim Reward
                                            </Button>
                                        )}
                                    </div>
                                )}

                                {auctionState && (
                                    <div className="mb-5">
                                        <div className="flex justify-between">
                                            <p>Your Bid</p>
                                            <p>Balance: {currenBalance}</p>
                                        </div>

                                        <div className="flex items-center rounded bg-white border border-black space-x-3 p-3 w-full">
                                            {historyBid.length !== 0 && (
                                                <Button
                                                    onClick={calculatetwentypercent}
                                                    size={'small'}
                                                    className="bg-transparent hover:bg-primary hover:text-black border border-gray-500 rounded-full text-gray-500 text-base px-4 py-0 font-medium whitespace-nowrap"
                                                >
                                                    {bidPercentIncrement}%
                                                </Button>
                                            )}
                                            {historyBid.length === 0 && (
                                                <Button
                                                    onClick={calculatetwentypercent}
                                                    size={'small'}
                                                    className="bg-transparent hover:bg-primary hover:text-black border border-gray-500 rounded-full text-gray-500 text-base px-4 py-0 font-medium whitespace-nowrap"
                                                >
                                                    Start Price
                                                </Button>
                                            )}
                                            <NumericalInput
                                                className="token-amount-input text-right text-black"
                                                value={yourbid}
                                                onUserInput={yourbid => {
                                                    setYourBid(yourbid)
                                                    CheckAllowBid(yourbid)
                                                }}
                                            />{' '}
                                            <p>{tokenSymbol}</p>
                                        </div>

                                        {!warning && <p className="text-green-thick">{warningText}</p>}
                                        {warning && <p className="text-red">{warningText}</p>}
                                    </div>
                                )}

                                {(ApprovalState.NOT_APPROVED === approvalState ||
                                    (ApprovalState.PENDING === approvalState && auctionState)) && (
                                    <Button
                                        disabled={
                                            ApprovalState.PENDING === approvalState || warningText === '' || warning
                                        }
                                        onClick={approve}
                                        color="gradient3"
                                        className="text-center"
                                    >
                                        {ApprovalState.PENDING === approvalState ? 'Approving...' : 'Approve'}
                                    </Button>
                                )}
                                {ApprovalState.APPROVED === approvalState && auctionState && (
                                    <Button
                                        color="gradient3"
                                        onClick={Bidding}
                                        disabled={warning || warningText === ''}
                                    >
                                        Place a Bid
                                    </Button>
                                )}
                            </div>
                            <div className="mt-8 text-black">
                                <span className="text-xl ">History Bids</span>
                                <div className="flex justify-between px-2">
                                    <p>address:</p>
                                    <p>Bid: </p>
                                </div>
                                <div className="border border-black mt-1 h-40 overflow-y-scroll">
                                    {historyBid
                                        .sort((a, b) => (a.price > b.price ? 1 : -1))
                                        .reverse()
                                        .map((item, index) => (
                                            <div key={index} className="flex justify-between p-2 text-sm">
                                                <div>{shortenAddress(item.address)}</div>
                                                <div>
                                                    {item.price} {tokenSymbol}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </BackgroundMain>
        </>
    )
}

export default NftDetail
