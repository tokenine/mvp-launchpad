import React from 'react'
import { classNames } from 'functions'

export default function CardHeader({ className, children }: any) {
    return (
        <div className={classNames('flex items-center rounded-t px-4 sm:px-8 py-4 sm:py-6', className)}>{children}</div>
    )
}

export function BorrowCardHeader({ children }: any) {
    return <CardHeader className="bg-green-x1 border-b-8 border-pink">{children}</CardHeader>
}

export function LendCardHeader({ children }: any) {
    return <CardHeader className="bg-green-x2 border-b-8 border-blue">{children}</CardHeader>
}
