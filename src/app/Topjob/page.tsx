import Dashboard from "@/components/dashboard";

export default function Topjob(){
    return(
        <div>
            <div className="bg-blue-900 w-screen h-[300px] bg-contain bg-no-repeat">
                <div className="pt-[200px] text-center">
                    <h3 className="text-7xl font-medium text-white">4536+ Jobs Availabe</h3>
                </div>
            </div>
            <div className='bg-pink-300/20 py-28 px-[180px]'>
            <div>
            <div className='grid grid-flow-col gap-20 my-20'>
                <div className='flex flex-col gap-10 mt-32'>
                <input type='text' className='w-[300px] h-[50px] border border-black/20 outline-none focus:border-black text-xl text-black font-bold px-5 rounded-lg' placeholder='Search Keyword'/>
                <select  className='w-[300px] h-[50px] border border-black/20 outline-none focus:border-black text-xl text-black px-5 rounded-lg'>
                    <option className="text-lg font-bold text-gray-400" value={"Category"}>Category</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job2"}>Job2</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job3"}>Job3</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job4"}>Job4</option>
                </select>
                <select className='w-[300px] h-[50px] border border-black/20 outline-none text-xl focus:border-black px-5 rounded-lg'>
                    <option className="text-lg font-bold text-gray-400" value={"Location"}>Location</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Mumbai</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Delhi</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Gujrat</option>
                </select>
                <button className='w-[300px] h-[50px] bg-green-500 text-2xl border text-white rounded-lg hover:text-green-500 hover:border-green-500 hover:bg-white'>Find Job</button>
                </div>
                <div>
                <div className='flex justify-between items-center mb-16'>
            <h1 className='text-5xl font-semibold'>Job Listing</h1>
            <select className='w-[250px] h-[50px] border border-black/20 outline-none text-xl focus:border-black px-5 rounded-lg'>
                    <option className="text-lg font-bold text-gray-400" value={"Location"}>Most Recent</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Software Engineering</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Marketing</option>
                    <option className="text-lg font-bold text-gray-400" value={"Job1"}>Creative & Design</option>
                </select>
            </div>
                <Dashboard title={"Software Engineer"} img={"1"}/>
                <Dashboard title={"Digital Marketer"} img={"2"}/>
                <Dashboard title={"Wordpress Developer"} img={"3"}/>
                <Dashboard title={"Visual Designer"} img={"4"}/>
                <Dashboard title={"Software Engineer"} img={"5"}/>
                <Dashboard title={"Creative Designer"} img={"1"}/>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}