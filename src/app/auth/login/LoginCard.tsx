"use client"
import Link from "next/link"
import { LoginButton } from "./LoginButton"
import { signInFunction } from "@/lib/actions/authActions"
import { useFormState } from "react-dom"

const LoginCard = () => {

  const [errorMessage,dispatch] = useFormState(signInFunction,"")

  return (
    <>
    <form action={dispatch} className='space-y-4'>
        <LoginButton />
    </form>
    <div className='mt-4 text-center text-[13px]'>
        <span>New To SnapNext? </span>
        <Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/auth/register'>
            Sign Up
        </Link>
        
        {errorMessage ? <p className='text-sm text-red-500'>{errorMessage}</p> : null}
    </div>
</>
  )
}
export default LoginCard