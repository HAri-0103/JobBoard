"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
type dashboardProps={
    title:string,
    img:string
}
export default function Dashboard(props:dashboardProps){
    const router = useRouter();
    const send = ()=>{
        router.push("/"+props.title)
    }
    return(
        <div className="flex justify-between items-center border px-20 my-5 bg-white rounded-xl" onClick={send}>
            <div className="flex justify-start items-center space-x-5">
                <Image className="border p-1 bg-pink-300/20 cursor-pointer" src={`/${props.img}.svg`} alt="" width={60} height={50}/>
                <div className="space-y-1">
                    <div className="text-3xl hover:text-green-600 cursor-pointer"><strong>{props.title}</strong></div>
                    <div className="flex space-x-5 text-base">
                        <p className="flex items-center gap-5 text-gray-500 fill-gray-500"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>California,USA</p>
                        <p className="flex items-center gap-5 text-gray-500 fill-gray-500"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>Part-time</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row gap-2 items-center p-10">
                <button className="w-fit px-10 py-5 rounded-lg font-bold hover:text-green-600 border hover:bg-white hover:border-green-600 text-xl text-white bg-green-600">Apply Now</button>
                <p className=" text-base italic">Date Line: 31 Jan 2024</p>
            </div>
        </div>
    )
}