import { useEffect, useState } from 'react'
import { useTokenContract } from '../../hooks/useContract'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { BigNumber } from 'ethers'

export const useLaunchToken = (address: string | undefined, account: string | undefined | null): { luachPadTokenName: string, luachPadTokenSymbol: string, luachPadDecimals: number } => {

  const [luachPadTokenName, setLuachPadTokenName] = useState('')
  const [luachPadTokenSymbol, setLuachPadTokenSymbol] = useState('')
  const [luachPadDecimals, setLuachPadDecimals] = useState(0)
  
  const token = useTokenContract(address, true)

  useEffect(() => {
    if (!address && !token) return
    const fetchDetail = async () => {
      const name = await token?.functions.name()
      setLuachPadTokenName(name)
      const symbol = await token?.functions.symbol()
      setLuachPadTokenSymbol(symbol)
      const decimals = await token?.functions.decimals()
      if (decimals) {
        setLuachPadDecimals(decimals[0])
      }
    }
    fetchDetail()
  }, [account, address, token])

  return {
    luachPadTokenName,
    luachPadTokenSymbol,
    luachPadDecimals
  }
}