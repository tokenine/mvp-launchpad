import { Card } from 'components'
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useAuctionContract, useTokenContract } from 'hooks/useContract'
import { BigNumber } from '@ethersproject/bignumber/lib/bignumber'
import { useNFTAuction } from 'constants/nft-auction'
import Countdown from 'react-countdown'
import CountdownCard from './components/CountdownCard'

interface NFTContent {
    id: number
    tokenURI: string
    startPrice: BigNumber
    buyPrice: BigNumber
    endTime: string
    timeactive: Boolean
    active: Boolean
    currenttopbid?: BigNumber
}

const BackgroundMain = styled.div``

const LabelDiv = styled.div`
    position: absolute;
    text-align: center;
    padding-top: 5px;
    top: -10px;
    right: -10px;
    background-color: #309b16;
    color: white;
    font-size: 18pt;
    border-radius: 100%;
    border: 1px solid black;
    font-weight: bold;
    width: 50px;
    height: 50px;
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
        background-color: #309b16;
        border-radius: 25px;
        color: white;
    }
`

// const Item = (item: StakeTokenList) => <Link
//         className={`${item.available ? 'cursor-pointer' : 'cursor-default'} sm:w-1/3 xs:w-full relative rounded border border-white`}
//         key={item.contractAddress}
//         to={item.available ? `/pool/${item.contractAddress}` : '/pool'}
//         >
//         {item.label && <LabelDiv>{item.label}</LabelDiv>}
//         <Card className="flex items-center justify-center text-center text-white">
//             <div className="my-3">
//                 <div className="my-5">
//                     <img alt="social giving" src={item.imageTokenUrl} className="inline-block h-auto w-full rounded-full ring-2 ring-white" />
//                 </div>
//                 <p className="text-h3" dangerouslySetInnerHTML={{__html: item.title}}></p>
//             </div>
//         </Card>
//     </Link>

function NFTAuction(): JSX.Element {
    const { chainId } = useActiveWeb3React()

    const { i18n } = useLingui()

    const auctioncontract = useNFTAuction(chainId)

    const itemcontract = useAuctionContract(auctioncontract?.auction)

    const [active, setActive] = useState(true)

    const tokencontract = useTokenContract(auctioncontract?.token)

    const [tokenDecimal, setTokenDecimal] = useState(0)
    const [tokenSymbol, setTokenSymbol] = useState('')

    const onActiveToggle = () => {
        setActive(!active)
    }

    const [activeItems, setactiveItems] = useState<NFTContent[]>([])
    const [inactiveItems, setinactiveItems] = useState<NFTContent[]>([])

    const time = (timeinput: number) => {
        if (timeinput < 10) {
            return '0' + timeinput.toString()
        } else {
            return timeinput.toString()
        }
    }

    useEffect(() => {
        const fetchContract = async () => {
            try {
                const listactiveNftItems: NFTContent[] = []
                const listinactiveNftItems: NFTContent[] = []
                const item = await itemcontract?.currentArtId()
                const deciaml = await tokencontract?.decimals()
                const symbol = await tokencontract?.symbol()
                let topBid = []
                let timeActive = true
                setTokenSymbol(symbol)
                setTokenDecimal(deciaml)
                for (let id = 0; id < item.toNumber(); id++) {
                    if (id !== 2) {
                        topBid = []
                        const bidlist = await itemcontract?.getBidsList(id)
                        if (bidlist.length !== 0) {
                            topBid = await itemcontract?.getTopBid(id)
                        }
                        const item = await itemcontract?.artItems(id)
                        const tokenURI = item.tokenURI
                        const startPrice = item.startPrice
                        const buyPrice = item.buyPrice
                        const active = item.active
                        const endtime = item.endTime.toString()
                        const date = new Date(endtime * 1000)
                        if (date.getTime() < Date.now()) {
                            timeActive = false
                        } else {
                            timeActive = true
                        }
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
                        if (timeActive === true) {
                            listactiveNftItems.push({
                                id: id,
                                tokenURI: tokenURI,
                                startPrice: startPrice,
                                buyPrice: buyPrice,
                                endTime: timeend,
                                active: active,
                                timeactive: timeActive,
                                currenttopbid: topBid[1]
                            })
                        } else if (timeActive === false) {
                            listinactiveNftItems.push({
                                id: id,
                                tokenURI: tokenURI,
                                startPrice: startPrice,
                                buyPrice: buyPrice,
                                endTime: timeend,
                                active: active,
                                timeactive: timeActive,
                                currenttopbid: topBid[1]
                            })
                        }
                    }
                }
                setactiveItems(listactiveNftItems)
                setinactiveItems(listinactiveNftItems)
            } catch (err) {
                console.error(err)
            }
        }
        fetchContract()
    }, [itemcontract, tokencontract])

    const ItemActive = (item: NFTContent) => (
        <Link
            className={`sm:w-1/2 md:w-full xs:w-full relative rounded border border-black`}
            key={item.id}
            to={`/mev-project/${item.id}`}
        >
            {/* {item.label && <LabelDiv>{item.label}</LabelDiv>} */}
            <Card className="flex items-center justify-center text-center text-black">
                <div className="my-3">
                    <div className="my-5">
                        <img
                            alt="social giving"
                            src={item.tokenURI}
                            className="inline-block h-14 w-14 sm:h-36 sm:w-36 rounded-full ring-2 ring-black"
                        />
                    </div>
                    {item.currenttopbid && (
                        <div className=" text-black font-bold text-xl">
                            Current Top Bids: {item.currenttopbid?.toFixed(tokenDecimal)} {tokenSymbol}
                        </div>
                    )}
                    <div className="text-black font-bold">
                        Start Bid Price: {item.startPrice.toFixed(tokenDecimal)} {tokenSymbol}
                    </div>
                    {/* <div className="text-white">
                        Buy Price: {item.buyPrice.toFixed(tokenDecimal)} {tokenSymbol}
                    </div> */}
                    <div className="text-sm text-center">EndTime in: {item.endTime}</div>
                </div>
            </Card>
        </Link>
    )

    const ItemEnd = (item: NFTContent) => (
        <Link
            className={`sm:w-1/2 md:w-full xs:w-full relative rounded border border-black`}
            key={item.id}
            to={`/mev-project/${item.id}`}
        >
            {/* {item.label && <LabelDiv>{item.label}</LabelDiv>} */}
            <Card className="flex items-center justify-center text-center text-black">
                <div className="my-3">
                    <div className="my-5">
                        <img
                            alt="social giving"
                            src={item.tokenURI}
                            className="inline-block max-h-48 max-w-48 rounded-full ring-2 ring-black"
                        />
                    </div>
                    {item.currenttopbid && (
                        <div className=" text-black font-bold text-xl">
                            Current Top Bids: {item.currenttopbid?.toFixed(tokenDecimal)} {tokenSymbol}
                        </div>
                    )}
                    <div className="text-black">
                        Start Bid Price: {item.startPrice.toFixed(tokenDecimal)} {tokenSymbol}
                    </div>
                    {/* <div className="text-white">
                        Buy Price: {item.buyPrice.toFixed(tokenDecimal)} {tokenSymbol}
                    </div> */}
                    <div className="text-xl font-bold">Auction End</div>
                </div>
            </Card>
        </Link>
    )

    return (
        <>
            <Helmet>
                <title>Auction | MEV</title>
            </Helmet>
            <BackgroundMain className="mb-20">
                <div className="relative flex flex-col items-center">
                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-black my-14">{i18n._(t`Auction`)}</div>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="text-center mb-14">
                        <SwitchDiv>
                            <div className={active ? 'active' : ''} onClick={onActiveToggle}>
                                Active
                            </div>
                            <div className={!active ? 'active' : ''} onClick={onActiveToggle}>
                                Inactive
                            </div>
                        </SwitchDiv>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch px-5 md:px-0">
                        {active && activeItems.map(item => ItemActive(item))}
                        {!active && inactiveItems.map(item => ItemEnd(item))}
                    </div>
                    {((active && activeItems.length === 0 && inactiveItems.length > 0) ||
                        (!active && inactiveItems.length === 0 && activeItems.length > 0)) && (
                        <div className="text-center text-black">No content.</div>
                    )}
                    {activeItems.length === 0 && inactiveItems.length === 0 && (
                        <div className="text-center text-black">Coming soon</div>
                    )}
                </div>
            </BackgroundMain>
        </>
    )
}

export default NFTAuction
