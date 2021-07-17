import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { useTokenContract } from '../../hooks/useContract'

export const useTokenDetail = (address: string | undefined, account: string | undefined | null): [string, string, number, Function] => {

  const [luachPadTokenName, setLuachPadTokenName] = useState('')
  const [luachPadTokenSymbol, setLuachPadTokenSymbol] = useState('')
  const [luachPadDecimals, setLuachPadDecimals] = useState(0)
  
  const token = useTokenContract(address, true)

  const transfer = async (destination: string, amount: BigNumber) => {
    return await token?.functions.transfer(destination, amount)
  }

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

  return [
    luachPadTokenName,
    luachPadTokenSymbol,
    luachPadDecimals,
    transfer
  ]
}