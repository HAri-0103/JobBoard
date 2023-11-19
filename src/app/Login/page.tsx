"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login(){
    const router = useRouter();
    const [data,setData] = useState({
        username: "",
        password:"",
})
const submit = async()=>{
    try {
        await axios.post("/api/Login",data);
        setData({
            username:"",
            password:"",
        })
        router.push("/");
    } catch (error) {
        console.log(error);
    }
}
    return(
        <div className="absolute bg-black w-screen h-screen flex justify-center items-center">
            <h1 className="absolute top-10 text-center text-7xl font-semibold text-white">Job Board</h1>
                    <div className="w-fit bg-white/5 rounded-lg p-20 h-auto grid grid-flow-row border">
                        <h1 className="text-white text-4xl font-bold text-center">Login Page</h1>
                        <div className="grid grid-flow-row justify-center items-center space-y-8 mt-28 text-black">
                            <div className='grid grid-flow-row space-y-4'>
                                <label className='text-3xl text-white text-center font-extrabold'>Username</label>
                                <input className='w-[300px] h-[40px] outline-none rounded-md text-xl font-bold pl-5' placeholder="Username" onChange={e=>setData({...data,username:e.target.value})} type='text'/>
                            </div>
                            <div className='grid grid-flow-row space-y-4    '>
                                <label className='text-3xl text-white text-center font-extrabold'>Password</label>
                                <input className='w-[300px] h-[40px] outline-none rounded-md text-xl font-bold pl-5' placeholder="Password" onChange={e=>setData({...data,password:e.target.value})} type='password'/>
                            </div>
                            <button className='w-[130px] p-5 text-3xl mx-28 rounded-lg text-white text-center font-medium border hover:bg-green-600 active:scale-95' onClick={submit}>Submit</button>
                        </div>
                        <h1 className="text-xl text-rose-500 font-bold text-center mt-5">Not Sign in? <Link className="text-blue-400 underline" href={"/Signin"}>Sign up</Link></h1>
                    </div>
        </div>
    )
}