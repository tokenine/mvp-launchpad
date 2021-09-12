import React from 'react'
import { CountdownRenderProps } from 'react-countdown'

const CountdownCard = ({ days,hours, minutes, seconds }: CountdownRenderProps): JSX.Element => {
    return (
        <>
            <span className="text-white text-xs">Ending in</span>
            <div className="grid gap-0 grid-flow-cols grid-cols-4 text-center">
                <div className="text-white">
                    <div className="type-timing">
                        <div className="font-medium text-white flex justify-center">
                            {days}
                            <p className="text-xs text-white self-end">D</p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <div className="type-timing">
                        <div className="font-medium text-white flex justify-center">
                            {hours}
                            <p className="text-xs text-white self-end">h</p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <div className="type-timing">
                        <div className="font-medium text-white flex justify-center">
                            {minutes}
                            <p className="text-xs text-white self-end">m</p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <div className="type-timing">
                        <div className="font-medium text-white flex justify-center">
                            {seconds}
                            <p className="text-xs text-white self-end">s</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountdownCard
