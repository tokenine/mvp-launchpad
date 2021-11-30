import { Card, CardHeader, Search } from './components'
// import { ChevronDown, ChevronUp } from 'react-feather'
import { Header, KashiLending, LiquidityPositionDFY } from './components/Farms'
import React, { useEffect, useState } from 'react'
// import { formattedNum, formattedPercent } from '../../utils'
import { useFuse, useSortableData } from 'hooks'
import { useMasterChefContract, useMiniChefV2Contract } from '../../hooks/useContract'

import { ChainId } from 'metaverse-sdk'
import { SimpleDots as Dots } from 'kashi/components'
import { Helmet } from 'react-helmet'
import Menu from './Menu'
import { RowBetween } from '../../components/Row'
import _ from 'lodash'
import styled from 'styled-components'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import useMasterChefFarms from './hooks/masterchefv1/useFarmsDFY'
// import useMasterChefV2Farms from './hooks/masterchefv2/useFarms'
// import useMiniChefFarms from './hooks/minichef/useFarms'
import useStakedPending from './hooks/portfolio/useStakedPending'

export const FixedHeightRow = styled(RowBetween)`
    height: 24px;
`

export default function Yield(): JSX.Element {
    const { i18n } = useLingui()
    const [section, setSection] = useState<'portfolio' | 'all' | 'LP' | 'SST'>('all')
    const { account } = useActiveWeb3React()

    // Get Farms
    const masterchefv1 = useMasterChefFarms()
    // const masterchefv2 = useMasterChefV2Farms()

    // const masterchefv1 = FarmV1
    // const masterchefv2 = FarmV2
    // const minichef = useMiniChefFarms()
    const allFarms = _.concat(
        // masterchefv2 ? masterchefv2 : [],
        // minichef ? minichef : [],
        masterchefv1 ? masterchefv1 : []
    )

    // Get Contracts
    const masterchefContract = useMasterChefContract()

    // Get Portfolios
    const [portfolio, setPortfolio] = useState<any[]>()
    const masterchefv1Positions = useStakedPending(masterchefContract)
    useEffect(() => {
        // determine masterchefv1 positions
        let masterchefv1Portfolio
        if (masterchefv1) {
            const masterchefv1WithPids = masterchefv1Positions?.[0].map((position, index) => {
                return {
                    pid: index,
                    pending_bn: position?.result?.[0],
                    staked_bn: masterchefv1Positions?.[1][index].result?.amount
                }
            })
            const masterchefv1Filtered = masterchefv1WithPids.filter(position => {
                return position?.pending_bn?.gt(0) || position?.staked_bn?.gt(0)
            })
            // fetch any relevant details through pid
            const masterchefv1PositionsWithDetails = masterchefv1Filtered.map(position => {
                const pair = masterchefv1?.find((pair: any) => pair.pid === position.pid)
                return {
                    ...pair,
                    ...position
                }
            })
            masterchefv1Portfolio = masterchefv1PositionsWithDetails
        }
        setPortfolio(masterchefv1Portfolio)
    }, [masterchefv1, masterchefv1Positions])

    // MasterChef v2
    const farms = allFarms

    //Search Setup
    const options = { keys: ['symbol', 'name', 'pairAddress'], threshold: 0.4 }
    const { result, search, term } = useFuse({
        data: farms && farms.length > 0 ? farms : [],
        options
    })
    const flattenSearchResults = result.map((a: { item: any }) => (a.item ? a.item : a))

    // Sorting Setup
    const { items, requestSort, sortConfig } = useSortableData(flattenSearchResults)

    // console.log('term:', term)

    return (
        <>
            <Helmet>
                <title>{i18n._(t`Yield`)} | DFY</title>
                <meta name="description" content="Farm DFY by staking LP (Liquidity Provider) tokens" />
            </Helmet>
            <div className="container grid grid-cols-4 gap-4 mx-auto">
                <div className="sticky top-0 hidden lg:block md:col-span-1" style={{ maxHeight: '40rem' }}>
                    <Menu section={section} setSection={setSection} />
                </div>
                <div className="col-span-4 lg:col-span-3">
                    <Card
                        className="h-full navbar-bg-green-thick-to-thin"
                        header={
                            <CardHeader className="flex flex-col items-center navbar-bg-green-thick-to-thin">
                                <div className="flex justify-between w-full">
                                    <div className="items-center hidden md:flex">
                                        <div className="mr-2 text-lg whitespace-nowrap text-white">{i18n._(t`Yield Farms`)}</div>
                                    </div>
                                    <Search search={search} term={term} />
                                </div>
                                <div className="container block pt-6 lg:hidden">
                                    <Menu section={section} setSection={setSection} />
                                </div>
                            </CardHeader>
                        }
                    >
                        {section && section === 'portfolio' && (
                            <>
                                {account ? (
                                    <>
                                        <Header sortConfig={sortConfig} requestSort={requestSort} />
                                        <div className="flex-col space-y-2">
                                            {portfolio && portfolio.length > 0 ? (
                                                portfolio.map((farm: any, i: number) => {
                                                    return (
                                                        <LiquidityPositionDFY
                                                            key={farm.address + '_' + i}
                                                            farm={farm}
                                                        />
                                                    )
                                                })
                                            ) : (
                                                <>
                                                    <div className="w-full py-6 text-center text-white">No Results.</div>
                                                </>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full py-6 text-center">Connect Wallet.</div>
                                )}
                            </>
                        )}
                        {section && section === 'all' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            return <LiquidityPositionDFY key={farm.address + '_' + i} farm={farm} />
                                        })
                                    ) : (
                                        <>
                                            <div className="w-full py-6 text-center text-white">No Results.</div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        {section && section === 'LP' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            if (farm.poolType === 'LP') {
                                                return <LiquidityPositionDFY key={farm.address + '_' + i} farm={farm} />
                                            } else {
                                                return null
                                            }
                                        })
                                    ) : (
                                        <>
                                            <div className="w-full py-6 text-center text-white">No Results.</div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        {section && section === 'SST' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            if (farm.poolType === 'SST') {
                                                return <LiquidityPositionDFY key={farm.address + '_' + i} farm={farm} />
                                            } else {
                                                return null
                                            }
                                        })
                                    ) : (
                                        <>
                                            <div className="w-full py-6 text-center text-white">No Results.</div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        {/* {section && section === 'slp' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            if (farm.type === 'SLP') {
                                                return <LiquidityPosition key={farm.address + '_' + i} farm={farm} />
                                            } else {
                                                return null
                                            }
                                        })
                                    ) : (
                                        <>
                                            {term ? (
                                                <div className="w-full py-6 text-center">No Results.</div>
                                            ) : (
                                                <div className="w-full py-6 text-center text-white">
                                                    <Dots>Fetching Farms</Dots>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        {section && section === 'kmp' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            if (farm.type === 'KMP') {
                                                return <KashiLending key={farm.address + '_' + i} farm={farm} />
                                            } else {
                                                return null
                                            }
                                        })
                                    ) : (
                                        <>
                                            {term ? (
                                                <div className="w-full py-6 text-center">No Results.</div>
                                            ) : (
                                                <div className="w-full py-6 text-center">
                                                    <Dots>Fetching Farms</Dots>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        {section && section === 'mcv2' && (
                            <>
                                <Header sortConfig={sortConfig} requestSort={requestSort} />
                                <div className="flex-col space-y-2">
                                    {items && items.length > 0 ? (
                                        items.map((farm: any, i: number) => {
                                            if (farm.type === 'SLP' && farm.contract === 'masterchefv2') {
                                                return <LiquidityPosition key={farm.address + '_' + i} farm={farm} />
                                            } else {
                                                return null
                                            }
                                        })
                                    ) : (
                                        <>
                                            {term ? (
                                                <div className="w-full py-6 text-center">No Results.</div>
                                            ) : (
                                                <div className="w-full py-6 text-center">
                                                    <Dots>Fetching Farms</Dots>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </>
                        )} */}
                    </Card>
                </div>
            </div>
        </>
    )
}
