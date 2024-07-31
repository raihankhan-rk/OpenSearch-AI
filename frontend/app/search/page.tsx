'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";

export default function Home() {

  const {data:session} = useSession();
  const router = useRouter();

  const registerUser = async () => {
    if(!session) return;

    try{
      const response = await axios.post('/api/create', {
        username: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image
      });
      console.log("res: ", response);
      localStorage.setItem('registered', JSON.stringify(true));
    }
    catch(err:any){
      console.log("err: ", err.response);
      if(err.response.data.error === 'Already registered'){
        localStorage.setItem('registered', JSON.stringify(true));
      }
    }
  }

  useEffect(()=>{
    if(session){
      console.log("loc:", localStorage.getItem('registered'));
      if(localStorage.getItem('registered')) return;
      registerUser();
    }
    else{
      router.push('/')
    }
  },[session])

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#1a1a1a] to-black">
      <BackgroundBeams className=" w-full "/>
      <a href="https://github.com/raihankhan-rk/OpenSearch" target="_blank" className=" cursor-pointer absolute top-5 left-5 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-3 py-2 text-sm flex flex-row gap-3 items-center justify-center ">
        <FaGithub className=" text-white text-3xl" /> <h3>Open Source</h3>
      </a>
      <button onClick={()=>{signOut(); localStorage.clear(); router.push('/');}} className=" absolute top-5 right-5 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-3 py-2 text-sm flex flex-row gap-3 items-center justify-center ">
          Sign Out
      </button>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className=" text-5xl font-bold text-white max-md:text-3xl "> OpenSearch </h1>
        <div className="w-fit h-fit relative md:w-[60%] max-md:w-[95%] max-md:mt-10  mt-10">
          <input type="text" placeholder="Search using Artificial Intelligence..." className=" placeholder:text-white/20 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 focus:text-white border-white/20 focus:bg-white/10 focus:outline-none focus:border-white/50 rounded-full px-5 py-4 w-full " />
          <button className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-black backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-100 hover:border-white/50 rounded-full p-3 flex flex-row gap-3 items-center justify-center ">
            <Icon name="search"/>
          </button>
        </div>
      </div>
    </main>
  );
}
