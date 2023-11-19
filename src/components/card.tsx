"use client"
import Link from "next/link"
import { useState } from "react"

type cardProps ={
    heading:String
}
export default function Card(props:cardProps){
    const [value,setValue] = useState(false);
    const hover =()=>{
        setValue(true);
        console.log("mouse enter")
    }
    const hoverOut =()=>{
        setValue(false);
    }
    return(
        <div className="w-[250px] h-[150px] grid grid-flow-row justify-center items-center p-10 my-5 bg-white border rounded-lg" onMouseEnter={hover} onMouseLeave={hoverOut}>
                <Link href={"/Profile"}><h1 className={`text-2xl ${value?"text-green-400 duration-500 underline":"text-black duration-500"}`}>{props.heading}</h1></Link>
            <div className="flex items-center space-x-5">
                <h1 className="text-xl p-1 border bg-pink-300/20">50</h1>
                <h1>Available Position</h1>
            </div>
        </div>
    )
}