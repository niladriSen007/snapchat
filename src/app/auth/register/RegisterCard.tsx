import Link from "next/link"
import RegisterButton from "./RegisterButton"

const RegisterCard = () => {
  return (
    <>
    <form  className='space-y-4'>
        <RegisterButton />
    </form>
    <div className='mt-4 text-center text-[13px]'>
        <span>Already have an account? </span>
        <Link className='text-blue-500 font-semibold hover:underline text-[13px] mr-1' href='/auth/login'>
            Log in
        </Link>
        {/* {errorMessage ? <p className='text-sm text-red-500'>{errorMessage}</p> : null} */}
    </div>
</>
  )
}
export default RegisterCard