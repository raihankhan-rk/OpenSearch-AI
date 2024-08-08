'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import EnhancedMarkdownRenderer from "@/utils/EnhancedMarkdownRenderer";


export default function Home() {

  const {data:session} = useSession();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const registerUser = async () => {
    if(!session) return;

    try{
      const response = await axios.post('/api/create', {
        username: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image
      });
      localStorage.setItem('registered', JSON.stringify(true));
    }
    catch(err:any){
      if(err.response.data.error === 'Already registered'){
        localStorage.setItem('registered', JSON.stringify(true));
      }
    }
  }

  useEffect(()=>{
    if(session){
      if(localStorage.getItem('registered')) return;
      // registerUser();
    }
    else{
      router.push('/')
    }
  },[session])

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(searchQuery === '') return;
    
    try{
      setLoading(true);
      const response = await axios.post('/api/search', {
        query: searchQuery,
        user: session?.user?.email
      });
      setSearchResults(response.data);
      setLoading(false);
    }
    catch(err:any){
      setLoading(false);
    }
  }

  if(loading) return (
    <main className="w-screen min-h-screen bg-gradient-to-br from-[#1a1a1a] to-black max-md:pb-20">
      <div className="flex flex-row gap-5 items-center justify-between max-md:flex-col w-[90%] mx-auto py-5">
        <h1 onClick={()=>{setSearchQuery(''); setSearchResults(null); setShowMore(false)}} className=" cursor-pointer text-4xl font-bold text-white max-md:text-2xl max-md:mt-10 "> OpenSearch AI </h1>
      <form className="w-fit h-fit relative md:w-[50%] max-md:w-[95%] max-md:mt-0 ">
          <input type="text" value={searchQuery} onChange={(event)=>{
            setSearchQuery(event.target.value);
          }} placeholder="Search using Artificial Intelligence..." className=" placeholder:text-white/20 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 focus:text-white border-white/20 focus:bg-white/10 focus:outline-none focus:border-white/50 rounded-full px-5 py-4 w-full " />
          <button disabled={true} type="submit" className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-black backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-100 hover:border-white/50 rounded-full p-3 flex flex-row gap-3 items-center justify-center ">
            <Icon name="search"/>
          </button>
        </form>
        </div>
        <div className="w-[90%] border-[1px] border-white/20 rounded-xl mx-auto min-h-[80vh] flex flex-col items-center justify-start p-5">
            <h3 className="font-bold text-sm text-white w-full mb-2 animate-pulse">AI-Search Results</h3>
            <div className="text-gray-300 font-light p-5 bg-white/5 w-full rounded-lg flex flex-col gap-2 ">
              <div className="bg-white/10 rounded-full w-full animate-pulse h-4"></div>
              <div className="bg-white/10 rounded-full w-[90%] animate-pulse h-4"></div>
              <div className="bg-white/10 rounded-full w-full animate-pulse h-4"></div>
              <div className="bg-white/10 rounded-full w-[80%] animate-pulse h-4"></div>
            </div>
        <div className="h-[1px] bg-white/20 w-full my-4"></div>
        <h3 className="font-bold text-sm text-white w-full mb-2 animate-pulse">Related Links</h3>
        <div className="grid grid-cols-5 max-md:grid-cols-2 gap-2 w-full h-36">
          {[1,2].map((link:any, index:number)=>(
            <div className="text-gray-300 border-b-[1px] border-b-white/30 w-full h-full hover:bg-white/10 duration-100 font-light p-4 bg-white/5 rounded-lg">
              <a href={link.url} target="_blank" className=" text-gray-300 duration-150 font-semibold flex flex-col gap-2">
                <div className="bg-white/20 rounded-full w-full animate-pulse h-3"></div>
                <div className="bg-white/20 rounded-full w-full animate-pulse h-3"></div>
                <div className="bg-white/10 rounded-full w-full animate-pulse h-2 mt-2"></div>
                <div className="bg-white/10 rounded-full w-full animate-pulse h-2"></div>
                <div className="bg-white/10 rounded-full w-full animate-pulse h-2"></div>
                <div className="bg-white/10 rounded-full w-full animate-pulse h-2"></div>
              </a>
            </div>
          ))}
        </div>

        <div className="w-full rounded-lg bg-white/5 p-3 mt-4 ">
              <h3 className="font-bold text-sm text-white mb-2 animate-pulse">Images</h3>
            <div className="w-full rounded-lg noscr ">
              <div className="grid grid-rows-1 grid-flow-col h-40 gap-2">
                {[1,2,3,4,5,6].map((image:any, index:number)=>(
                  <div className="text-gray-300 duration-100 font-light bg-white/5 w-64 overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-white/5 rounded-lg animate-pulse"></div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
    </main>
  )

  if(!searchResults)
  return (
    <main className="w-screen min-h-screen bg-gradient-to-br from-[#1a1a1a] to-black max-md:pb-20">
      <BackgroundBeams className=" w-full "/>
      <a href="https://github.com/raihankhan-rk/OpenSearch-AI" target="_blank" className=" cursor-pointer absolute top-5 left-5 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-3 py-2 text-sm flex flex-row gap-3 items-center justify-center ">
        <FaGithub className=" text-white text-3xl" /> <h3>Open Source</h3>
      </a>
      <button onClick={()=>{signOut(); localStorage.clear(); router.push('/');}} className=" absolute top-5 right-5 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-200 hover:bg-white/10 hover:border-white/50 rounded-lg px-3 py-2 text-sm flex flex-row gap-3 items-center justify-center ">
          Sign Out
      </button>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 onClick={()=>{setSearchQuery(''); setSearchResults(null); setShowMore(false);}} className=" cursor-pointer text-4xl font-bold text-white max-md:text-2xl max-md:mt-10 "> OpenSearch AI </h1>
      <form onSubmit={handleSubmit} className="w-fit h-fit relative md:w-[50%] max-md:w-[95%] max-md:mt-10  mt-10">
          <input type="text" onChange={(event)=>{
            setSearchQuery(event.target.value);
          }} placeholder="Search using Artificial Intelligence..." className=" placeholder:text-white/20 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 focus:text-white border-white/20 focus:bg-white/10 focus:outline-none focus:border-white/50 rounded-full px-5 py-4 w-full " />
          <button type="submit" className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-black backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-100 hover:border-white/50 rounded-full p-3 flex flex-row gap-3 items-center justify-center ">
            <Icon name="search"/>
          </button>
        </form>
      </div>
    </main>
  );
  else
  return (
    <main className="w-screen min-h-screen bg-gradient-to-br from-[#1a1a1a] to-black max-md:pb-20">
      <div className="flex flex-row gap-5 items-center justify-between max-md:flex-col w-[90%] mx-auto py-5">
        <h1 onClick={()=>{setSearchQuery(''); setSearchResults(null); setShowMore(false)}} className=" cursor-pointer text-4xl font-bold text-white max-md:text-2xl max-md:mt-10 "> OpenSearch AI </h1>
      <form onSubmit={handleSubmit} className="w-fit h-fit relative md:w-[50%] max-md:w-[95%] max-md:mt-0 ">
          <input type="text" onChange={(event)=>{
            setSearchQuery(event.target.value);
          }} placeholder="Search using Artificial Intelligence..." className=" placeholder:text-white/20 bg-white/5 backdrop-blur-sm border-[1px] text-gray-400 focus:text-white border-white/20 focus:bg-white/10 focus:outline-none focus:border-white/50 rounded-full px-5 py-4 w-full " />
          <button type="submit" className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-black backdrop-blur-sm border-[1px] text-gray-400 hover:text-white border-white/20 duration-100 hover:border-white/50 rounded-full p-3 flex flex-row gap-3 items-center justify-center ">
            <Icon name="search"/>
          </button>
        </form>
        </div>
        <div className="w-[90%] border-[1px] border-white/20 rounded-xl mx-auto min-h-[75vh] flex flex-col items-center justify-start p-5 overflow-hidden">
          <h3 className="font-bold text-xl text-white w-full mb-2">AI-Search Results</h3>
            <div className={`text-gray-300 font-light p-5 bg-white/5 w-full rounded-lg `}>
              <EnhancedMarkdownRenderer content={searchResults && searchResults.response}/>
              {!showMore ? <h3 className="text-white md:hidden font-bold cursor-pointer w-full text-left" onClick={()=>{setShowMore(true)}}>...more</h3>:
              <h3 className="text-white md:hidden font-bold cursor-pointer w-full text-right" onClick={()=>{setShowMore(false)}}>...less</h3>}
            </div>
            <div className="h-[1px] bg-white/20 w-full my-4"></div>
            <h3 className="font-bold text-sm text-white w-full mb-2">Related Links</h3>
            <div className="grid grid-cols-5 max-md:grid-cols-2 gap-2">
              {searchResults?.related_links.map((link:any, index:number)=>(
                <div className="text-gray-300 border-b-[1px] border-b-white/30 hover:bg-white/10 duration-100 font-light p-4 bg-white/5 rounded-lg">
                  <a href={link.url} target="_blank" className=" text-gray-300 duration-150 font-semibold">
                    <h3 className=" flex flex-row items-center justify-start w-full text-sm font-semibold line-clamp-1 truncate ">{link.title}</h3>
                    <div className=" flex flex-row gap-1 text-[8px] items-center text-white font-thin mt-0"> <FaGlobeAfrica /> <h3 className=" w-[80%] line-clamp-1">{link.url}</h3></div>
                    <h3 className="text-xs font-thin mt-2 line-clamp-3">{link.snippet}</h3>
                  </a>
                </div>
              ))}
            </div>
            <div className="w-full rounded-lg bg-white/5 p-3 mt-4 ">
              <h3 className="font-bold text-sm text-white mb-2">Images</h3>
            <div className="w-full rounded-lg noscr ">
              <div className="grid grid-rows-1 grid-flow-col h-40 gap-2">
                {searchResults?.image_urls.map((image:any, index:number)=>(
                  <div className="text-gray-300 duration-100 font-light bg-white/5 w-64 overflow-hidden rounded-lg">
                      <Image src={image} alt="load" width={1000} height={1000} className="object-cover w-full h-full"/>
                  </div>
                ))}
              </div>
              </div>
            </div>
        </div>
    </main>
  )
}
