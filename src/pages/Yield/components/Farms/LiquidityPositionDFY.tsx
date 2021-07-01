import React, { useState } from 'react'
import { formattedNum, formattedPercent } from '../../../../utils'
import { DoubleLogo, Paper } from '../../components'
import { MasterChefV1DetailsDFY, MasterChefV2Details, MiniChefDetails } from '../Details'
import { useActiveWeb3React } from '../../../../hooks/useActiveWeb3React'
import { ChainId } from 'dfy-sdk'
import AsyncTokenIcon from '../../../../kashi/components/AsyncTokenIcon'

const LiquidityPositionDFY = ({ farm }: any) => {
    const [expand, setExpand] = useState<boolean>(false)
    const { chainId } = useActiveWeb3React()

    return (
        <>
            {farm && (
                <Paper className="bg-green-bg-yield">
                    <div
                        className="bg-green-header-yield grid grid-cols-3 md:grid-cols-4 px-4 py-2  cursor-pointer select-none rounded rounded-b-none"
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="text-sm text-white sm:text-base font-semibold">
                            {farm && farm.token0.symbol + '-' + farm.token1.symbol}
                        </div>
                        <div className="hidden md:block text-sm sm:text-base ml-4 text-gray-200 text-right">
                            DFY
                        </div>
                        <div className="text-gray-200 text-sm sm:text-base text-right">
                            {formattedNum(farm.tvl, true)}
                        </div>
                        <div className="font-semibold text-sm sm:text-base text-right">
                            {farm.roiPerYear > 100 ? '10000%+' : formattedPercent(farm.roiPerYear * 100)}
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 md:grid-cols-4 py-4 px-4 cursor-pointer select-none rounded text-sm"
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="col-span-1 flex items-center">
                            {chainId === ChainId.MATIC ? (
                                <div className="md:col-span-3 flex flex-col space-y-2">
                                    <div className="mr-4 flex flex-row space-x-2 items-center">
                                        <div>
                                            <AsyncTokenIcon
                                                address={farm.token0.address}
                                                chainId={chainId}
                                                className="block w-10 h-10 rounded-sm"
                                            />
                                        </div>
                                        <div>
                                            <AsyncTokenIcon
                                                address={farm.token0.address}
                                                chainId={chainId}
                                                className="block w-10 h-10 rounded-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mr-4">
                                    <DoubleLogo
                                        a0={farm.token0.address}
                                        a1={farm.token0.address}
                                        size={40}
                                        margin={true}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="md:col-span-1 hidden md:flex flex-row space-x-2 justify-end items-center ml-4">
                            <div>
                                {farm && farm.type === 'minichef' && (
                                    <>
                                        <div className="text-gray-200 text-right font-semibold text-xs">
                                            {formattedNum(farm.dfyRewardPerDay)} SUSHI per day
                                        </div>
                                        <div className="text-gray-200 text-right font-semibold text-xs">
                                            {formattedNum(farm.secondaryRewardPerDay)} WMATIC per day
                                        </div>
                                    </>
                                )}
                                {farm && farm.type === 'masterchefv2' && (
                                    <>
                                        <div className="text-gray-200 text-right font-semibold text-xs">
                                            {formattedNum(farm.dfyRewardPerDay)} SUSHI per day
                                        </div>
                                        <div className="text-gray-200 text-right font-semibold text-xs">
                                            {formattedNum(farm.secondaryRewardPerDay)} ALCX per day
                                        </div>
                                    </>
                                )}
                                {farm && farm.type === 'masterchefv1' && (
                                    <>
                                        <div className="text-gray-200 text-right font-semibold text-sm sm:text-sm">
                                            {formattedNum(farm.dfyRewardPerDay)} DFY
                                        </div>
                                        <div className="text-gray-200 text-right text-xs">per day</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="md:col-span-1 flex justify-end items-center">
                            <div>
                                {/* <div className="text-right">{formattedNum(farm.tvl, true)} </div> */}
                                <div className="text-gray-200 text-right font-semibold text-sm sm:text-sm">
                                    {formattedNum(farm.lpBalance / 1e18, false)} LP
                                </div>
                                <div className="text-gray-200 text-right text-xs">Market Staked</div>
                            </div>
                        </div>
                        <div className="md:col-span-1 flex justify-end items-center">
                            <div>
                                <div className="text-gray-200 text-right font-semibold text-base sm:text-lg">
                                    {farm.roiPerYear > 100 ? '10000%+' : formattedPercent(farm.roiPerYear * 100)}
                                    {/* {formattedPercent(farm.roiPerMonth * 100)}{' '} */}
                                </div>
                                <div className="text-gray-200 text-right text-xs">annualized</div>
                                {/* <div className="text-gray-500 text-right text-xs">per month</div> */}
                            </div>
                        </div>
                    </div>

                    {expand && farm.type === 'masterchefv1' && (
                        <MasterChefV1DetailsDFY
                            pid={farm.pid}
                            pairAddress={farm.pairAddress}
                            pairSymbol={farm.symbol}
                            token0Address={farm.token0.address}
                            token1Address={farm.token1.address}
                            type={'LP'}
                        />
                    )}
                </Paper>
            )}
        </>
    )
}

export default LiquidityPositionDFY
