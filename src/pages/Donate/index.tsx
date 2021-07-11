import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { donateTokenListByChainId, DonateTokenList } from '../../constants/donate-token'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { BiDonateHeart } from 'react-icons/bi'
import { ChainId } from 'dfy-sdk'
 
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
    
    const [items, setItems] = useState<DonateTokenList[]>([])

    useEffect(() => {
        try {
            if (chainId && chainId !== 1) {
                setItems(Object.values(donateTokenListByChainId[chainId] as DonateTokenList[]))
            } else {
                setItems(Object.values(donateTokenListByChainId[ChainId.BKC] as DonateTokenList[]))
            }
        } catch (err) {
            console.error(err)
        }
    }, [chainId])

    return (
        <>
            {' '}
            <Helmet>
                <title>Pool for donation | DFY</title>
            </Helmet>
            <BackgroundMain className="w-screen">

                <div className="relative flex flex-col items-center">
                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-black my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Pool for donation`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-5xl">
                    <div className="gap-4 col-span-3 flex flex-row justify-center">
                        {items.length > 0 && items.map(item => (
                            <Link
                                className={`${item.available ? 'cursor-pointer' : 'cursor-default'} w-1/3`}
                                key={item.contractAddress}
                                to={item.available ? `/donate/${item.contractAddress}` : '/donate'}
                            >
                                <Card className="flex items-center justify-center text-center text-black rounded border border-black">
                                    <div className="my-3">
                                        <div className="my-3">
                                            <img alt="social giving" src={item.imageTokenUrl} className="inline-block w-full h-auto rounded-full ring-2 ring-white" />
                                        </div>
                                        <p className="text-h3" dangerouslySetInnerHTML={{__html: item.title}}></p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {items.length === 0 && <div className="text-center text-black">
                        Coming soon
                    </div>}
                </div>
            </BackgroundMain>
        </>
    )
}

export default Stake
