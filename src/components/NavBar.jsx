import React,{useState} from 'react'
import {TfiMenu} from 'react-icons/tfi'
import {AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {GiCancel} from 'react-icons/gi'
import {TbTruck} from 'react-icons/tb'
import {MdFavorite ,MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'


const NavBar = () => {

    const [nav, setnav] = useState(false);

  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        {/*left side*/}
        <div className='flex items-center'>
           <div onClick={()=> setnav(!nav)} className='cursor-pointer'>
        <TfiMenu size={40} className='hover:bg-gray-400 p-2 rounded-full'/>    
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
           Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text=[14px]'>
            <p className='bg-black text-white rounded-full p-2 hover:bg-gray-200 hover:text-black'>Delivery</p>
            <p className='p-2 rounded-full hover:bg-black hover:text-white'>Pickup</p>
        </div>
        </div>

        {/* input search */}

        <div className='bg-gray-200 rounded-full 
        flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={30}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' />
        </div>
        {/* cart button */}
        <button className='bg-black text-white hidden mr-8 md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/>Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        
        
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 
        left-0'></div> : ''}

        {/* slide drawer menu */}
        

        <div className={nav ? 'fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px]bg-white h-screen z-10 duration-300'}>
            <GiCancel 
            onClick={()=> setnav(!nav)}
             className='absolute right-5 top-3 cursor-pointer' size={35} />
            <h2 className='text-2xl p-4'>
                Best<span className='font-bold'> Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruck size={25} className='mr-4'/>Orderd</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                    </ul>
                </nav>
        </div>
    </div>
  )
}

export default NavBar