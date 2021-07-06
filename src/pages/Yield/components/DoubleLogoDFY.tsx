import React from 'react'
import styled from 'styled-components'
import TokenLogoDFY from './TokenLogoDFY'

const TokenWrapper = styled.div<{ sizeraw: number; margin?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-right: ${({ sizeraw, margin }) => margin && (sizeraw / 3 + 8).toString() + 'px'};
`

const HigherLogo = styled(TokenLogoDFY)<{ higherRadius?: string }>`
    z-index: 2;
    /* background-color: white; */
    border-radius: ${({ higherRadius }) => (higherRadius ? higherRadius : '50%')};
`

const CoveredLogo = styled(TokenLogoDFY)`
    position: absolute;
    left: ${({ sizeraw }) => (sizeraw / 1.2).toString() + 'px'};
    /* background-color: white; */
    border-radius: 50%;
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function DoubleTokenLogo({ srcToken0, srcToken1, size = 24, margin = false, higherRadius }: any) {
    return (
        <TokenWrapper sizeraw={size} margin={margin}>
            <HigherLogo src={srcToken0} size={size.toString() + 'px'} sizeraw={size} higherRadius={higherRadius} />
            <CoveredLogo src={srcToken1} size={size.toString() + 'px'} sizeraw={size} />
        </TokenWrapper>
    )
}
