import React, { useEffect, useState } from 'react'
import PlaceHolder from 'assets/images/placeholder.png'
import styled from 'styled-components'

const Inline = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
`

const Image = styled.img<{ size: number }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    max-width: 100px;
    border-radius: 50%;
`
// background-color: white;
// box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function TokenLogo({ src, header = false, size, ...rest }: any) {
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
    }, [src])

    //if (error || BAD_IMAGES[address]) {
    if (error) {
        return (
            <Inline>
                <Image {...rest} alt={''} src={PlaceHolder} size={size} />
            </Inline>
        )
    }
   
    return (
        <Inline>
            <Image
                {...rest}
                alt={''}
                src={src}
                size={size}
                onError={event => {
                    //   BAD_IMAGES[address] = true
                    setError(true)
                    event.preventDefault()
                }}
            />
        </Inline>
    )
}
