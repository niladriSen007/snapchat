"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export const LoginButton = () =>{
	const { pending } = useFormStatus();
	return (
		<Button className='w-full flex gap-2' disabled={pending} aria-disabled={pending}>
			<Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Log in with Github
		</Button>
	);
}