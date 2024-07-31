'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const {data:session} = useSession();
  const router = useRouter();

  useEffect(()=>{
    if(!session){
      router.push('/')
    }
  },[session])

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#1a1a1a] to-black">
      <BackgroundBeams className=" w-full "/>
      <button onClick={()=>{signOut(); router.push('/');}} className=" max-md:mt-10 absolute top-5 right-5 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-5 py-3 flex flex-row gap-3 items-center justify-center ">
          Sign Out
        </button>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className=" text-5xl font-bold text-white max-md:text-3xl "> Open Search </h1>
        <input type="text" placeholder="Search using Artificial Intelligence..." className=" placeholder:text-white/20 mt-10 md:w-[60%] max-md:w-[95%] max-md:mt-10 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 focus:text-white border-white/20 focus:bg-white/10 focus:outline-none focus:border-white/50 rounded-full px-5 py-3 flex flex-row gap-3 items-center justify-center " />
        <button className=" mt-5 max-md:mt-3 bg-black backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-100 hover:border-white/50 rounded-full px-5 py-3 flex flex-row gap-3 items-center justify-center ">
          <Icon name="search"/> Search
        </button>
      </div>
    </main>
  );
}
