"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Signin(){
    const router = useRouter();
    const [data,setData] = useState({
        username:"",
        emailid:"",
        password:""
    })
    const submit = async() =>{
        try {
            const res =await axios.post("/api/Signin",data);
            console.log(res);
        setData(
            {
                username:"",
                emailid:"",
                password:""
            }
        )
        console.log("signin complete");
        router.push("/Login");
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="absolute bg-black w-screen h-screen flex justify-center items-center space-y-10">
            <h1 className="absolute top-10 text-center text-7xl font-semibold text-white">Job Board</h1>
                    <div className="w-fit h-auto grid grid-flow-row border-2 rounded-lg p-20 bg-white/5">
                        <h1 className="text-white text-4xl font-bold text-center">Sign in Page</h1>
                        <div className="grid grid-flow-row justify-center items-center space-y-8 mt-28 text-black">
                            <div className='grid grid-flow-row space-y-4'>
                                <label className='text-3xl text-white text-center font-extrabold'>Username</label>
                                <input className='w-[300px] h-[40px] outline-none rounded-md text-xl font-bold pl-5' value={data.username} placeholder="Username" onChange={e=>setData({...data,username:e.target.value})} type='text'/>
                            </div>
                            <div className='grid grid-flow-row space-y-4'>
                                <label className='text-3xl text-white text-center font-extrabold'>Email</label>
                                <input className='w-[300px] h-[40px] outline-none rounded-md text-xl font-bold pl-5' value={data.emailid} placeholder="Email Id" onChange={e=>setData({...data,emailid:e.target.value})} type='email'/>
                            </div>
                            <div className='grid grid-flow-row space-y-4    '>
                                <label className='text-3xl text-white text-center font-extrabold'>Password</label>
                                <input className='w-[300px] h-[40px] outline-none rounded-md text-xl font-bold pl-5' value={data.password} placeholder="Password" onChange={e=>setData({...data,password:e.target.value})} type='password'/>
                            </div>
                            <button className='w-[130px] p-5 text-3xl mx-28 rounded-lg text-white text-center font-medium border hover:bg-green-600 active:scale-95' onClick={submit}>Submit</button>
                        </div>
                        <h1 className="text-xl text-rose-500 font-bold text-center mt-5">Already Sign in? <Link className="text-blue-400 underline" href={"/Login"}>Login</Link></h1>
                    </div>
        </div>
    )
}