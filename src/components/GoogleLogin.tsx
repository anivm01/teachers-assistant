'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import styles from '../styles/GoogleLogin.module.scss'
import google from '../../public/google-logo.svg'
import Image from 'next/image'
import Loader from './Loader'

const GoogleLogin: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.box}>
            {isLoading ? <div>
                <Loader />
            </div> : <button
                type='button'
                className={styles.google}
                onClick={loginWithGoogle}
                disabled={isLoading}>
                <Image className={styles.logo} src={google} alt="google logo" />
                <span className={styles.text}>Log in with Google</span>
            </button>}
        </div>
    )
}

export default GoogleLogin