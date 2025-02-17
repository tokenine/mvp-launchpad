import React from 'react'
import { Currency, Price } from 'metaverse-sdk'
import { AutoRow } from '../../components/Row'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'

export default function LiquidityPrice({
    input,
    output,
    price
}: {
    input?: Currency
    output?: Currency
    price?: Price
}): JSX.Element {
    const { chainId } = useActiveWeb3React()
    return (
        <div className="rounded-b-md md:bg-dark-800" style={{ marginTop: '-20px', padding: '1px' }}>
            <AutoRow
                justify={'space-between'}
                style={{ padding: '0 1rem' }}
                className="rounded-b-md md:bg-green-thick text-white py-1"
            >
                <div>Current Rate</div>
                <div>
                    {price?.toSignificant(6) ?? '-'} {output?.getSymbol(chainId)} per {input?.getSymbol(chainId)}
                </div>
            </AutoRow>
        </div>
    )
}
