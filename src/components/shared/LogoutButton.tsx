import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { signOut } from "../../auth"
import { signOutFunction } from "@/lib/actions/authActions"

const LogoutButton = () => {

  

  return (
    <form action={signOutFunction}>
			<Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>
				<LogOut className='cursor-pointer' />
			</Button>
		</form>
  )
}
export default LogoutButton