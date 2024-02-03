import { Metadata } from "next";
import RegisterCard from "./RegisterCard"


export const metadata: Metadata = {
  title: "SnapNext - Register",
  description: "SnapNext register page",
};

const RegisterPage = () => {
  return (
   <>
   <h1 className='text-2xl font-bold text-center mb-4'>Sign up to SnapNext</h1>
			<RegisterCard />
   </>
  )
}
export default RegisterPage