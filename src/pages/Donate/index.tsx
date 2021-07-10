import { useState } from 'react'
import { Card } from 'kashi/components'
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import Web3Status from 'components/Web3Status'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { Input as NumericalInput } from 'components/NumericalInput'
import Button from 'components/Button'
import { useTransactionAdder } from '../../state/transactions/hooks'
import styled from 'styled-components'
import { useTokenContract } from 'hooks/useContract'
import { BiDonateHeart } from 'react-icons/bi'
import { ChainId, Token } from 'dfy-sdk'
import { donateDetailByChainId, DonateToken } from '../../constants/donate-token'
 
const BackgroundMain = styled.div`
    margin-top: -40px;
    margin-bottom: -80px;
    padding-bottom: 80px;
    height: 100vh;
    overflow-y: scroll;
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Donate() {

    const { i18n } = useLingui()

    const { account, chainId } = useActiveWeb3React()
    const donateDetail = donateDetailByChainId[chainId ?? ChainId.BSC] as DonateToken
    
    const token = new Token(
      chainId ?? 0,
      donateDetail?.acceptToken.address ?? '',
      donateDetail?.acceptToken.decimals ?? 18,
      donateDetail?.acceptToken.name ?? '',
      donateDetail?.acceptToken.symbol ?? ''
    )

    const donaterBalance = useCurrencyBalance(account ?? undefined, token ?? undefined)
    const donatedBalance = useCurrencyBalance(donateDetail?.destinationAddress ?? undefined, token ?? undefined)
    const acceptToken = useTokenContract(token.address, true)
    
    const [donateBalance, setDonateBalance] = useState('')
    const [isCommiting, setIsCommiting] = useState(false)

    const addTransaction = useTransactionAdder()

    const onMax = () => {
      setDonateBalance(
        donaterBalance ? donaterBalance.toExact() : ''
      )
    }

    return (
        <>
            {' '}
            <Helmet>
                <title>Donate | DFY</title>
            </Helmet>
            <BackgroundMain className="navbar-bg-green-thick-to-thin w-screen">

                <div className="relative flex flex-col items-center">
                    {/* <img alt="" src={BentoBoxLogo} className="object-scale-down w-40 md:w-60 h-auto" /> */}

                    <div className="container mx-auto max-w-3xl">
                        <div className="font-bold text-center text-4xl text-white my-20">
                            <BiDonateHeart className="inline-block" /> {i18n._(t`Donate`)}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto sm:px-6 max-w-5xl  rounded border border-white">
                    <div className="grid gap-4 sm:gap-12 grid-flow-auto grid-cols-2">
                        <Card className="flex items-center justify-center col-span-2 md:col-span-1 text-white">
                            <p className="text-h3 mb-5">Proposal Details</p>
                            <div dangerouslySetInnerHTML={{__html: donateDetail ? donateDetail.proposalContent : ''}} />
                        </Card>
                        <Card className="col-span-2 md:col-span-1 w-full shadow-pink-glow hover:shadow-pink-glow-hovered">
                            <div className="relative w-full">
                                <div className="text-white mb-10">
                                  <p className="font-bold">Donate wallet:</p>
                                  {donateDetail?.destinationAddress}
                                </div>
                                <Card className="border border-white mb-10">
                                  <p className="text-white mb-3">Total Donate Amount :</p> 
                                  <p className="text-center text-white text-h2">
                                    {donatedBalance ? donatedBalance.toSignificant(6) : 0} {donateDetail?.acceptToken.symbol ?? ''}
                                  </p>
                                </Card> 
                                {account ? (
                                    <div>
                                        <div className="text-white text-right text-caption2">
                                            Balance: {donaterBalance ? donaterBalance.toSignificant(6) : 0} {donateDetail?.acceptToken.symbol ?? ''}
                                        </div>
                                        <div className="flex items-center rounded bg-white space-x-3 p-3 w-full mb-10">
                                            <Button
                                                onClick={onMax}
                                                size="small"
                                                className="bg-transparent hover:bg-primary hover:text-white border border-high-emphesis rounded-full text-gray-500 text-xs font-medium whitespace-nowrap"
                                            >
                                                {i18n._(t`Max`)}
                                            </Button>
                                            <NumericalInput
                                                disabled={isCommiting}
                                                className="token-amount-input text-right"
                                                value={donateBalance}
                                                onUserInput={val => {
                                                  setDonateBalance(val)
                                                }}
                                            />
                                            <span className="ml-2">{}</span>
                                        </div>
                                          <Button
                                              color="gradient3"
                                              disabled={isCommiting || donateBalance === ''}
                                              onClick={async () => {
                                                  try {
                                                      setIsCommiting(true)
                                                      const response = await acceptToken?.functions.transfer(donateDetail?.destinationAddress, donateBalance.toBigNumber(donateDetail?.acceptToken.decimals ?? 18))
                                                      addTransaction(response, {
                                                          summary: 'Donate commited!'
                                                      })
                                                      setDonateBalance('')
                                                      setIsCommiting(false)
                                                  } catch (err) {
                                                      console.error(err)
                                                      setIsCommiting(false)
                                                  }
                                              }}
                                              className="w-full border border-white py-2 font-bold text-center text-white disabled:cursor-not-allowed"
                                          >
                                              {i18n._(t`Donate`)}
                                          </Button>
                                    </div>
                                ) : (
                                    <Web3Status />
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </BackgroundMain>
        </>
    )
}

export default Donate
