"use client"
import React from 'react';
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Nav(){
    const router = useRouter();
    const logout = async() =>{
        try {
            await axios.get("/api/Logout");
            router.push("/Login");
        } catch (error:any) {
            console.log(error.message);
        }
    }
    return(
        <div>
            <div className='fixed w-screen bg-black/20 p-10 text-white shadow-lg backdrop-blur-lg transition-all '>
                <div className='flex justify-between items-center'>
                <div className=' font-bold cursor-pointer text-3xl'>Job Board</div>
                <div className='flex text-2xl font-medium space-x-10'>
                    <Link className='ul' href={"/"}>Home</Link>
                    <Link className='ul' href={"/"}>Browse Job</Link>
                    <Link className='ul' href={"/"}>Pages</Link>
                    <Link className='ul' href={"/"}>Blog</Link>
                    <Link className='ul' href={"/"}>Contact</Link>
                </div>
                <div className='text-2xl flex items-center space-x-3'>
                    <button className="p-2" onClick={logout}>Logout</button>
                    <button className='bg-green-500 p-2 text-2xl rounded-md hover:bg-green-700 hover:scale-95'>Post A Job</button>
                </div>
                </div>
            </div>
      </div>
    )
}