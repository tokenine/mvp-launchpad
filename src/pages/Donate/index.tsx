import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StakeTokenList } from '../../constants/stake-token'
import { donateTokenListByChainId } from '../../constants/donate-token'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { BiDonateHeart } from 'react-icons/bi'
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

function Stake(): JSX.Element {
    const { i18n } = useLingui()

    const { chainId } = useActiveWeb3React()

    const [items, setItems] = useState<StakeTokenList[]>([])

    useEffect(() => {
        try {
            console.log(chainId)
            if (chainId) {
                setItems(Object.values(donateTokenListByChainId[chainId] as StakeTokenList))
            }
        } catch (err) {

        }
    }, [chainId])

    return (
        <>
            {' '}
            <Helmet>
                <title>Donate | DFY</title>
            </Helmet>
            <BackgroundMain className="navbar-bg-green-thick-to-thin w-screen">

                <div className="relative flex flex-col items-center">
                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-white my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Donate`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-3">
                        {items.length > 0 && items.map(item => (
                            <Link
                                className={`${item.available ? 'cursor-pointer' : 'cursor-default'}`}
                                key={item.contractAddress}
                                to={item.available ? `/donate/${item.contractAddress}` : '/donate'}
                            >
                                <Card className="flex items-center justify-center text-center col-span-2 md:col-span-1 text-white rounded border border-white">
                                    <div className="my-3">
                                        <div className="my-5">
                                            <img alt="launchpad" src={item.imageTokenUrl} className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
                                        </div>
                                        <p className="text-h3">{item.title}</p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {items.length === 0 && <div className="text-center text-white">
                        Coming soon
                    </div>}
                </div>
            </BackgroundMain>
        </>
    )
}

export default Stake
