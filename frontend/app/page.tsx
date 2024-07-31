'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {

  const {data:session} = useSession();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' })
  }

  useEffect(()=>{
    if(session){
      router.push('/search')
    }
  },[session])

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#1a1a1a] to-black">
      <BackgroundBeams className=" w-full "/>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className=" text-5xl font-bold text-white max-md:text-3xl "> OpenSearch </h1>
        <h1 className=" text-xl text-gray-500 mt-5 max-md:text-sm text-center max-md:px-10"> New search engine powered by Aritificial Intelligence </h1>
        <button onClick={handleGoogleSignIn} className=" mt-16 max-md:mt-10 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-5 py-3 flex flex-row gap-3 items-center justify-center ">
          <Icon name="google"/> Signin with Google
        </button>
      </div>
    </main>
  );
}
