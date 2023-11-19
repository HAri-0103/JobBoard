import Image from "next/image"

type CompanyProps={
    img:string,
    name:string,
    pos:string
}
export default function Company(props:CompanyProps){
    return(
        <div className="w-fit flex justify-center items-center gap-10">
            <div className="grid grid-flow-row justify-center items-center w-[200px] h-[200px] border border-gray-600 rounded-lg">
                <Image className="mx-5" src={`${props.img}.svg`} alt="" width={100} height={100}/>
                <div className="grid grid-flow-row text-center items-center">
                    <p className="text-2xl"><strong>{props.name}</strong></p>
                    <p className="text-lg"><strong className="p-1 bg-pink-300/20">{props.pos}</strong> Positon Available</p>
                </div>
            </div>
        </div>
    )
}