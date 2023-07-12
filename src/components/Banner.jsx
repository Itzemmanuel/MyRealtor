import Search from './Search'
import Img from '../assets/image/House-Banner.jpg'


export default function Banner() {
    return(
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='tracking-wider text-4xl lg:text-[58px] font-bold leading-none mb-6'><span className='text-cyan-500 transition animate-pulse'>Find</span> Your Dream House With Us.</h1>
                    <p className='font-medium max-w-[480px] mb-8'>
                        Join our community of renters who have found their perfect homes with myRealtor. Start your search today and unlock a world of possibilities. Your dream rental home is just a few clicks away!
                    </p>
                </div>
                <div className='hidden flex-1 lg:flex justify-end items-end'>
                    <img className='rounded-tl-3xl ' src={Img}alt="Houser-Banner"/>
                </div>
            </div>
            <Search />
        </section>
    )
}