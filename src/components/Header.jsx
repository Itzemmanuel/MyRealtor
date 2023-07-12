// import link
import {Link} from 'react-router-dom'

// import logo
import myRealtorLogo from "../assets/myRealtor-Logo.png"

export default function Header() {
    return(
        <header className='py-4 mb-12'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <img className="w-20" src={myRealtorLogo} alt='Logo' />
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='transition rounded-lg py-2 px-6 tracking-widest text-black shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-cyan-600 hover:text-cyan-500 uppercase hover:-translate-y-1 active:translate-y-0 active:shadow-md' to=''>Login</Link>
                    <Link className='transition bg-cyan-600 rounded-lg py-2 px-6 tracking-widest text-slate-100 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-cyan-600 uppercase hover:-translate-y-1 active:translate-y-0 active:shadow-md' to=''>Sign up</Link>
                </div>
            </div>
        </header>
    )
}