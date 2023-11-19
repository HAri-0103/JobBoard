import Card from '@/components/card';
import Company from '@/components/company';
import Dashboard from '@/components/dashboard';
import Slider from '@/components/slider';
import Link from 'next/link';

export default function Profile() {
  return (
    <div>
      <div className="bg-blue-900 w-screen h-screen bg-[url('/hero.avif')] bg-cover bg-no-repeat">
      <div className="absolute top-[25%] w-[650px] h-[400px] leading-10 space-y-5 p-[50px]">
        <h3 className="text-4xl font-medium text-white">4536+ Jobs listed</h3>
        <h1 className="text-6xl text-white font-bold">Find your Dream Job</h1>
        <p className="text-lg font-medium text-white">We provide online instant cash loans with quick approval that suit your term length</p>
        <div className="my-[10px] translate-y-10">
          <label className='cursor-pointer text-2xl p-5 bg-green-500 border border-green-500 rounded-lg text-white hover:bg-transparent transition-all duration:300 hover:duration-300 hover:text-green-500' htmlFor="file">Upload your Resume</label>
          <input className="hidden" type='file' id="file"/>
        </div>
      </div>
      </div>
      <div className='grid grid-flow-row items-center justify-center my-20'>
        <div className='flex justify-center items-center space-x-20 px-5 mt-20 mb-5'>
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
          <button className='w-[300px] h-[50px] bg-green-500 text-2xl border text-white rounded-lg hover:text-green-500 hover:border-green-500 hover:bg-white'><Link href={"/Topjob"}>Find Job</Link></button>
        </div>
        <div className='flex justify-center items-center space-x-3 mb-10'>
          <h1 className='font-normal text-2xl text-black'><strong>Popular Search:</strong></h1>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Design & Creative</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Marketing</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Administration</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Teaching & Education</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Engineering</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Software & Web</button>
          <button className='w-fit h-[30px] p-2 border text-lg text-blue-600 rounded-lg transition-all duration:300 hover:duration-300 hover:border-blue-600 '>Telemarketing</button>
        </div>
      </div>
      <div className='grid grid-flow-row items-center justify-start p-28 bg-pink-300/20'>
        <h1 className='text-5xl font-semibold mb-10'>Popular Categories</h1>
        <div className='grid grid-cols-4 gap-20 px-24'>
          <Card heading={"Design & Creative"}/>
          <Card heading={"Marketing"}/>
          <Card heading={"Telemarketing"}/>
          <Card heading={"Software & Web"}/>
          <Card heading={"Administration"}/>
          <Card heading={"Teaching & Education"}/>
          <Card heading={"Engineering"}/>
          <Card heading={"Garment / Textile"}/>
        </div>
      </div>
      <div className='bg-pink-300/20 py-28 px-[180px]'>
        <div className='flex justify-between items-center mb-16'>
          <h1 className='text-5xl font-semibold'>Job Listing</h1>
          <button className='w-fit px-10 py-5 rounded-lg text-green-600 border border-green-600 text-xl hover:text-white hover:bg-green-600'><Link href={"/Topjob"}>Browse More Job</Link></button>
        </div>
        <div>
          <Dashboard title={"Software Engineer"} img={"1"}/>
          <Dashboard title={"Digital Marketer"} img={"2"}/>
          <Dashboard title={"Wordpress Developer"} img={"3"}/>
          <Dashboard title={"Visual Designer"} img={"4"}/>
          <Dashboard title={"Software Engineer"} img={"5"}/>
          <Dashboard title={"Creative Designer"} img={"1"}/>
        </div>
      </div>
      <div className='grid grid-flow-row items-center bg-pink-300/20 py-28 px-[180px]'>
        <h1 className='text-center text-5xl font-semibold'>Featured Candidates</h1>
        <Slider/>
      </div>
      <div className='grid grid-flow-row items-center bg-pink-300/20 py-28 px-[180px]'>
      <div className='flex justify-between items-center mb-16'>
          <h1 className='text-5xl font-semibold'>Top Companies</h1>
          <button className='w-fit px-10 py-5 rounded-lg text-green-600 border border-green-600 text-xl hover:text-white hover:bg-green-600'><Link href={"/Topjob"}>Browse More Job</Link></button>
        </div>
      <div className='flex gap-20 my-10'>
        <Company img={"1"} name={"Snack Studio"} pos={"50"}/>
        <Company img={"2"} name={"Python Studio"} pos={"50"}/>
        <Company img={"3"} name={"Nerul Studio"} pos={"50"}/>
        <Company img={"4"} name={"Gaming Studio"} pos={"50"}/>
        <Company img={"5"} name={"GTa Studio"} pos={"50"}/>
      </div>
      </div>
    </div>
  )
}