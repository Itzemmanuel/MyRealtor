import {housesData} from '../Data'

import {useParams, Link} from 'react-router-dom'

import {BiBed, BiBath, BiArea} from 'react-icons/bi'


export default function PropertyDetails() {

    const {id} =useParams();

    const house = housesData.find(house => {
        return house.id === parseInt(id);
    })

    return(
        <section>
            <div className='container mx-auto min-h-[800px] mb-14'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'>
                           {house.name} 
                        </h2>
                        <h3 className='text-lg mb-4'>
                           {house.address} 
                        </h3>
                    </div>
                    <div className='mb-4 mr-14 lg:mb-0 flex gap-x-2 text-sm'>
                        <div className='bg-green-500 text-white px-3 rounded-full'>
                            {house.type}
                              
                        </div>
                        <div className='bg-cyan-500 text-white px-3 rounded-full'>
                            {house.country}
                        </div>
                    </div>
                    <div className='text-3xl font-semibold text-cyan-500'>
                        $ {house.price}
                    </div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt="House Image" />
                        </div>
                        <div className='flex gap-x-6 text-cyan-600 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl' />
                                <div>
                                    {house.bedrooms} 
                                </div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl' />
                                <div>
                                    {house.bathrooms}
                                </div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl'  />
                                <div>
                                    {house.surface} 
                                </div>
                            </div>
                        </div>
                        <div>
                            {house.description}
                        </div>
                    </div>
                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 '>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                               <img src={house.agent.image} alt="Realtor agent" /> 
                            </div>
                            <div>
                                <div className='font-bold text-lg'>
                                    {house.agent.name}
                                </div>
                                <Link to='' className='text-cyan-600 hover:text-cyan-500 font-medium text-sm'>
                                    View Listings
                                </Link>
                            </div>
                        </div>
                        <form className='flex flex-col gap-y-4'>
                            <input className='border border-gray-300 focus:border-cyan-500 outline-none rounded w-full px-4 h-14 text-sm text-slate-950'  type="text"
                            placeholder='Name' />
                            <input className='border border-gray-300 focus:border-cyan-500 outline-none rounded w-full px-4 h-14 text-sm text-slate-950'  type="tel"
                            placeholder='Phone Number' />
                             <input className='border border-gray-300 focus:border-cyan-500 outline-none rounded w-full px-4 h-14 text-sm text-slate-950'
                             type="email"
                             placeholder='Email' />
                            <textarea className='border border-gray-300 focus:border-cyan-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-slate-950'
                            placeholder='Message'>
                            </textarea>
                            <div className='flex gap-x-2'>
                                <button className='bg-cyan-800 hover:bg-cyan-600 text-white rounded p-4 text-sm w-full transition'>
                                    Send message
                                </button>
                                <button className=' border border-cyan-700 text-cyan-700 hover:border-cyan-500 hover:text-cyan-500 rounded p-4 text-sm w-full transition'>
                                    Call
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}