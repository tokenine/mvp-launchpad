import { useEffect, useState } from 'react'
import { useTokenContract } from '../../hooks/useContract'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { BigNumber } from 'ethers'

export const useLaunchToken = (address: string | undefined, account: string | undefined | null): { luachPadTokenName: string, luachPadTokenSymbol: string, luachPadTokenOwnerBalance: BigNumber } => {

  const [luachPadTokenName, setLuachPadTokenName] = useState('')
  const [luachPadTokenSymbol, setLuachPadTokenSymbol] = useState('')
  const [luachPadTokenOwnerBalance, setLuachPadTokenOwnerBalance] = useState(BigNumber.from(0))
  

  const token = useTokenContract(address, true)

  useEffect(() => {
    if (!address && !token) return
    const fetchDetail = async () => {
      const name = await token?.functions.name()
      setLuachPadTokenName(name)
      const symbol = await token?.functions.symbol()
      setLuachPadTokenSymbol(symbol)
      const balance = await token?.functions.balanceOf(account)
      if (balance) {
        setLuachPadTokenOwnerBalance(balance[0])
      }
    }
    fetchDetail()
  }, [account, address, token])

  return {
    luachPadTokenName,
    luachPadTokenSymbol,
    luachPadTokenOwnerBalance
  }
}