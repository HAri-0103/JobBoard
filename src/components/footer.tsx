import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className='grid grid-flow-col items-center py-28 px-[180px] bg-blue-950'>
        <div>
          <h1 className=' font-bold cursor-pointer text-6xl text-white'>Job Board</h1>
          <div className='text-lg text-white/60 my-20'>
            <h1>finloan@support.com</h1>
            <h1>+10 873 672 6782</h1>
            <h1>600/D, Green road, NewYork</h1>
          </div>
          <div className='flex justify-start items-center gap-5'>
            <Link href={"/"}><InstagramIcon className='w-12 h-12 border rounded-full p-2 hover:bg-green-500 hover:fill-white hover:duration-500'/></Link>
            <Link href={"/"}><FacebookIcon className='w-12 h-12 border rounded-full p-2  hover:bg-green-500 hover:fill-white'/></Link>
            <Link href={"/"}><GoogleIcon className='w-12 h-12 border rounded-full p-2  hover:bg-green-500 hover:fill-white'/></Link>
            <Link href={"/"}><TwitterIcon className='w-12 h-12 border rounded-full p-2 hover:bg-green-500 hover:fill-white'/></Link>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-white'>Company</h1>
          <div className='text-lg text-white/60 my-20 leading-10'>
            <h1 className='hover:text-white/90 cursor-pointer'>About</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>Pricing</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>Carrier Tips</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>FAQ</h1>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-white'>Category</h1>
          <div className='text-lg text-white/60 my-20 leading-10'>
            <h1 className='hover:text-white/90 cursor-pointer'>Design & Arts</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>Engineering</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>Sales Marketing</h1>
            <h1 className='hover:text-white/90 cursor-pointer'>Finance</h1>
          </div>
        </div>
        <div className='grid grid-flow-row items-start w-auto'>
          <h1 className='text-2xl font-bold text-white'>Subscribe</h1>
          <div className='grid grid-flow-row my-20 space-y-5'>
            <div>
              <input className='w-[355px] h-[55px] rounded-lg px-10 text-2xl border border-gray-500 bg-blue-950' type='email' placeholder='Enter your mail'/>
              <button className='w-fit px-6 py-4 rounded-lg text-xl text-white bg-green-600 -translate-x-[110px]'>Subscribe</button>
            </div>
            <p className='text-xl text-white flex-wrap'>Esteem spirit temper too say adieus who direct esteem<br/> esteems luckily.</p>
          </div>
        </div>
      </footer>
    )
}