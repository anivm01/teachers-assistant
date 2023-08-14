'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface CloseAuthModalProps { }

const CloseAuthModal: FC<CloseAuthModalProps> = ({ }) => {
    const router = useRouter()

    return (
        <button type='button' onClick={() => router.back()}>
            X
        </button>
    )
}

export default CloseAuthModal