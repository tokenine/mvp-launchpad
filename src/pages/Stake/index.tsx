import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { stakeTokenListByChainId, StakeTokenList } from '../../constants/stake-token'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

const LabelDiv = styled.div`
    position: absolute;
    text-align: center;
    padding-top: 5px;
    top: -10px;
    right: -10px;
    background-color: #f47c94;
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
        background-color: #f47c94;
        border-radius: 25px;
        color: white;
    }
`

const Item = (item: StakeTokenList) => <Link
        className={`${item.available ? 'cursor-pointer' : 'cursor-default'} sm:w-1/3 xs:w-full relative rounded border border-black`}
        key={item.contractAddress}
        to={item.available ? `/pool/${item.contractAddress}` : '/pool'}
        >
        {item.label && <LabelDiv>{item.label}</LabelDiv>}
        <Card className="flex items-center justify-center text-center text-black">
            <div className="my-3">
                <div className="my-5">
                    <img alt="social giving" src={item.imageTokenUrl} className="inline-block h-auto w-full rounded-full ring-2 ring-white" />
                </div>
                <p className="text-h3" dangerouslySetInnerHTML={{__html: item.title}}></p>
            </div>
        </Card>
    </Link>

function Stake(): JSX.Element {
    const { i18n } = useLingui()

    const { chainId } = useActiveWeb3React()

    const today = new Date()
    const [active, setActive] = useState(true)

    const onActiveToggle = () => {
        setActive(!active)
    }
    
    const [activeItems, setActiveItems] = useState<StakeTokenList[]>([])
    const [inactiveItems, setinactiveItems] = useState<StakeTokenList[]>([])

    useEffect(() => {
        try {
            if (!chainId) return
            const items = Object.values(stakeTokenListByChainId[chainId] as StakeTokenList[])
            setActiveItems(items.filter(item => today.getTime() >= item.startTime.getTime() && today.getTime() <= item.endTime.getTime()))
            setinactiveItems(items.filter(item => today.getTime() > item.endTime.getTime()))
        } catch (err) {
            console.error(err)
        }
    }, [chainId])

    return (
        <>
            {' '}
            <Helmet>
                <title>Pool | DFY</title>
            </Helmet>
            <BackgroundMain className="w-screen">

                <div className="relative flex flex-col items-center">
                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-black my-14">
                            {i18n._(t`Pool`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="text-center mb-14">
                        <SwitchDiv>
                            <div
                                className={active ? 'active':''}
                                onClick={onActiveToggle}
                            >
                                Active
                            </div>
                            <div
                                className={!active ? 'active':''}
                                onClick={onActiveToggle}
                            >
                                Inactive
                            </div>
                        </SwitchDiv>
                    </div>
                    <div className="flex flex-row gap-5 justify-center items-stretch px-5 md:px-0">
                        {active && activeItems.map((item) => Item(item))}
                        {!active && inactiveItems.map((item) => Item(item))}
                    </div>
                    {((active && activeItems.length === 0 && inactiveItems.length > 0) || (!active && inactiveItems.length === 0 && activeItems.length > 0)) && <div className="text-center text-black">
                        No content.
                    </div>}
                    {activeItems.length === 0 && inactiveItems.length === 0 && <div className="text-center text-black">
                        Coming soon
                    </div>}
                </div>
            </BackgroundMain>
        </>
    )
}

export default Stake
