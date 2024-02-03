import Image from "next/image"
import Link from "next/link"
import LoginCard from "./LoginCard"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SnapNext - Login",
  description: "SnapNext login page",
};

const LoginPage = () => {
  return (
    <>
    <h1 className='text-2xl font-bold text-center mb-4'>Log in to SnapNext</h1>
			<LoginCard />
    </>
  )
}
export default LoginPage