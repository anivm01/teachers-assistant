'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout: React.FC = () => {

    return (
        <button
            type='button'
            onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}/sign-in`, })}
        >Logout</button>
    )
}

export default Logout