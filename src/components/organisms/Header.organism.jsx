"use client"
import React from "react"
import avatar from "../../../public/avatar.svg"
import Image from "next/image";

const Header = ({ toggleSidebar, isOpen }) => {

    return (
        <div className='navbar bg-white text-black flex justify-between items-center h-24 shadow'>
            {/* Toggle Button */}
            <div className='p-2 mr-10 md:hidden'>
                <button
                    className='md:hidden'
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-primary-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>
            </div>
            {/* Item Header */}
            <div className='flex-1 md:flex hidden pl-4'>
                <input type='text' placeholder='Cari' className='input input-bordered bg-gray-100 rounded-2xl' />
            </div>
            <div className='flex-none gap-2'>
                <div className='form-control mx-4'>
                    <div className='indicator'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' /></svg>
                        <span className='badge badge-xs badge-primary indicator-item'></span>
                    </div>
                </div>
                <div className='dropdown dropdown-end mx-4'>
                    <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                        <div className='w-10 rounded-full'>
                            <Image alt='avatar' src={avatar}></Image>
                        </div>
                    </label>
                    <ul tabIndex={0} className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-100 rounded-box w-52'>
                        <li>
                            <a className='justify-between'>
                                Profile
                                <span className='badge'>New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className='mr-2'>
                    <p className='font-black md:flex hidden'>Halo, Ulfa</p>
                    <p className='md:flex hidden'>Selamat pagi!</p>
                </div>
            </div>
        </div>
    )
}

export default Header