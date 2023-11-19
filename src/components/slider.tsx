"use client"
import Image from "next/image"
import { useState } from "react";
export default function Slider(){
    const data =[
        {
            id:1,
            img:"/per1.png",
            name:"Markary Jordan",
            pos:"Software Engineer",
        },
        {
            id:2,
            img:"/per2.png",
            name:"Joe Jordan",
            pos:"Software Engineer",  
        },
        {
            id:3,
            img:"/per3.png",
            name:"Marle Chu",
            pos:"Software Engineer",
        },
        {
            id:4,
            img:"/per4.png",
            name:"Joe Don",
            pos:"Software Engineer",
        },
        {
            id:5,
            img:"/per5.png",
            name:"Here Jordan",
            pos:"Software Engineer",
        },
    ]
    const [value,setValue] = useState(false);
    const hover =()=>{
        setValue(true);
        console.log("mouse enter")
    }
    const hoverOut =()=>{
        setValue(false);
    }
    return(
    <div className="w-[1200px] overflow-x-auto my-10 snap-x">
        <div className="w-fit flex justify-center items-center gap-10">
        {data.map((d,key)=>(
            <div key={key} className="grid grid-flow-row justify-center items-center w-[200px] h-[200px] border border-gray-600 rounded-lg cursor-pointer">
                <Image className="mx-5" src={d.img} alt="" width={100} height={100}/>
                <div className="grid grid-flow-row text-center items-center">
                    <p className={`text-2xl hover:text-green-600`}><strong>{d.name}</strong></p>
                    <p className="text-lg">{d.pos}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
    )
}