import React, { useState, useEffect } from 'react'
import { formattedNum } from '../../../../utils'
import { DoubleLogoDFY, Paper, TokenLogoDFY } from '../../components'
import { MasterChefV1DetailsDFY, MiniChefv2DFY, MasterChefv2DFY } from '../Details'
// import { useActiveWeb3React } from '../../../../hooks/useActiveWeb3React'
import { useMasterChefContractManual, usePairContract, useTokenContract } from '../../../../hooks/useContract'
import Big from 'big.js'

const toNumberFormat = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

/* 
* Referrence calculate TVL and APY
* src/pages/Yield/hooks/masterchefv1/useFarms.ts 
*
*/

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LiquidityPositionDFY = ({ farm }: any) => {
    const [expand, setExpand] = useState<boolean>(false)

    const masterChefV1Contract = useMasterChefContractManual(farm.masterchefAddress)
    const pairLPToken = usePairContract(farm.pairAddress)

    const tokenSingleStaked = useTokenContract(farm.token0.address)

    const [stakedBalance, setStakedBalance] = useState('0')
    const [tvl, setTVL] = useState('0')

    const [showRoiPerYear, setShowRoiPerYear] = useState(0)
    const [showRoiPerDay, setRoiPerDay] = useState(0)

    useEffect(() => {
        const fetchPoolDetail = async () => {
            const callDecimals = await pairLPToken?.functions.decimals()
            const decimals = callDecimals[0]

            // reward (APY)
            const AVERAGE_BLOCK_TIME = 5 //bsc average block time for calculate
            const blockPerHour = 3600 / AVERAGE_BLOCK_TIME

            const poolInfo = await masterChefV1Contract?.functions.poolInfo(farm.pid)
            const tokenRewardPerBlock = await masterChefV1Contract?.functions.sushiPerBlock()
            const totalAllocPoint = await masterChefV1Contract?.functions.totalAllocPoint()

            const allocPoint = new Big(poolInfo[1])
            const totalAllocPointAmount = new Big(totalAllocPoint[0])
            const totalRewardPerBlock = new Big(tokenRewardPerBlock[0].toFixed(decimals))

            // reward = reward per block * (allocPoint / totalAllocPoint)
            const rewardPerBlock = totalRewardPerBlock.mul(allocPoint.div(totalAllocPointAmount))

            const roiPerHour = rewardPerBlock.mul(blockPerHour) // aph
            const roiPerDay = roiPerHour.mul(24) // apd
            setRoiPerDay(roiPerDay.toNumber())
            const roiPerMonth = roiPerDay.mul(30) // apm
            const roiPerYear = roiPerMonth.mul(12) // apy
            setShowRoiPerYear(roiPerYear.div(totalRewardPerBlock).mul(100).toNumber())

            // calculate TVL
            if (farm.poolType === 'LP') {
                const pairReseves = await pairLPToken?.functions.getReserves() 
                const reseve0Balance = new Big(pairReseves[0].toFixed(decimals))

                const poolTotalSupply = await pairLPToken?.functions.balanceOf(farm.masterchefAddress)
                const pairTotalSupply = await pairLPToken?.functions.totalSupply()

                const poolTotalSupplyBalance = new Big(poolTotalSupply[0].toFixed(decimals))
                const totalSupplyBalance = new Big(pairTotalSupply[0].toFixed(decimals))

                // (reseve0 / totalSupply) * LP of pool balance
                const ratio = reseve0Balance.div(totalSupplyBalance)
                const tvl = ratio.mul(poolTotalSupplyBalance).mul(2).toFixed(decimals)
    
                setStakedBalance(poolTotalSupplyBalance.toFixed(decimals))
                setTVL(tvl)
            } else if (farm.poolType === 'SST') {
                const poolTotalSupply = await tokenSingleStaked?.functions.balanceOf(farm.masterchefAddress)
                const poolTotalSupplyBalance = new Big(poolTotalSupply[0].toFixed(decimals))
                setStakedBalance(poolTotalSupplyBalance.toFixed(decimals))
            }
        }
        fetchPoolDetail()
    }, [pairLPToken, farm, masterChefV1Contract, tokenSingleStaked])

    return (
        <>
            {farm && (
                <Paper className="bg-green-bg-yield">
                    <div
                        className="bg-green-header-yield grid grid-cols-3 md:grid-cols-4 px-4 py-2  cursor-pointer select-none rounded rounded-b-none"
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="text-sm text-white sm:text-base font-semibold">
                            {farm && farm.token0 && farm.token1 && farm.token0.symbol + '-' + farm.token1.symbol}
                            {farm && farm.token0 && !farm.token1 && farm.token0.symbol}
                        </div>
                        <div className="hidden md:block text-sm sm:text-base ml-4 text-gray-200 text-right">
                            {farm.tokenReward.symbol}
                        </div>
                        <div className="text-gray-200 text-sm sm:text-base text-right">
                            {formattedNum(tvl, true)}
                        </div>
                        <div className="font-semibold text-sm sm:text-base text-right">
                            {toNumberFormat(showRoiPerYear)}%
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 md:grid-cols-4 py-4 px-4 cursor-pointer select-none rounded text-sm"
                        onClick={() => setExpand(!expand)}
                    >
                        <div className="col-span-1 flex items-center">
                            {/* {chainId === ChainId.MATIC ? (
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
                            )} */}
                            
                            <div className="mr-4">
                                { farm && farm.poolType === 'LP' && <DoubleLogoDFY
                                    srcToken0={farm.token0.imageUrl}
                                    srcToken1={farm.token1.imageUrl}
                                    size={40}
                                    margin={true}
                                />}
                                { farm && farm.poolType === 'SST' && 
                                    <TokenLogoDFY
                                    src={farm.token0.imageUrl}
                                    size="40px"
                                    />
                                }
                            </div>
                        </div>
                        <div className="md:col-span-1 hidden md:flex flex-row space-x-2 justify-end items-center ml-4">
                            <div>
                                {/* {farm && farm.type === 'minichef' && (
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
                                )} */}
                                {/* {farm && farm.type === 'masterchefv1' && (  
                                )} */}
                                <>
                                    <div className="text-gray-200 text-right font-semibold text-sm sm:text-sm">
                                        {toNumberFormat(showRoiPerDay)} {farm.tokenReward.symbol}
                                    </div>
                                    <div className="text-gray-200 text-right text-xs">per day</div>
                                </>
                            </div>
                        </div>
                        <div className="md:col-span-1 flex justify-end items-center">
                            <div>
                                {/* <div className="text-right">{formattedNum(farm.tvl, true)} </div> */}
                                <div className="text-gray-200 text-right font-semibold text-sm sm:text-sm">
                                    {/* formattedNum(farm.lpBalance / 1e18, false) */}
                                    {formattedNum(stakedBalance, false)} {farm.poolType === 'LP' ? farm.poolType : farm.token0.symbol}
                                </div>
                                <div className="text-gray-200 text-right text-xs">Market Staked</div>
                            </div>
                        </div>
                        <div className="md:col-span-1 flex justify-end items-center">
                            <div>
                                <div className="text-gray-200 text-right font-semibold text-base sm:text-lg">
                                    {/* {showRoiPerYear > 100 ? '10000%+' : formattedPercent(showRoiPerYear * 100)} */}
                                    {toNumberFormat(showRoiPerYear)}%
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
                            token1Address={farm.token1 ? farm.token1.address : undefined}
                            type={farm.poolType}
                            tokenRewardSymbol={farm.tokenReward.symbol}
                            assetSymbol={farm.token0.symbol}
                        />
                    )}
                    {expand && farm.type === 'masterchefv2' && (
                        <MasterChefv2DFY
                            pid={farm.pid}
                            pairAddress={farm.pairAddress}
                            pairSymbol={farm.symbol}
                            token0Address={farm.token0.address}
                            token1Address={farm.token1 ? farm.token1.address : undefined}
                            type={farm.poolType}
                            assetSymbol={farm.token0.symbol}
                        />
                    )}
                    {expand && farm.type === 'minichefv2' && (
                        <MiniChefv2DFY
                            pid={farm.pid}
                            pairAddress={farm.pairAddress}
                            pairSymbol={farm.symbol}
                            token0Address={farm.token0.address}
                            token1Address={farm.token1 ? farm.token1.address : undefined}
                            type={farm.poolType}
                            assetSymbol={farm.token0.symbol}
                        />
                    )}
                </Paper>
            )}
        </>
    )
}

export default LiquidityPositionDFY
