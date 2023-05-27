"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import sociops from "../../../public/sociops.svg"
import { FaArchive, FaChalkboardTeacher, FaCoins, FaHandHoldingHeart, FaHome } from "react-icons/fa"
import { AiFillSetting, AiOutlineArrowLeft } from "react-icons/ai"
import { MdHelp } from "react-icons/md"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='h-screen bg-white'>
            {/* Sidebar */}
            <aside
                className={`absolute left-0 top-0 z-50 flex h-screen w-72 shadow-md
                flex-col overflow-y-hidden bg-white duration-300 ease-linear 
                lg:static lg:translate-x-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Logo */}
                <div className='flex h-16 m-4'>
                    <Image alt='icon' src={sociops}></Image>
                    <div className='p-4 text-primary-600 md:hidden block'>
                        <AiOutlineArrowLeft size={24} onClick={toggleSidebar}></AiOutlineArrowLeft>
                    </div>
                </div>
                {/* List Items */}
                <nav className='mt-8'>
                    <ul>
                        <li>
                            <Link legacyBehavior href='/dashboard'>
                                <a className={classNames(
                                    '', typeof window !== 'undefined' && window.location.pathname === '/dashboard'
                                    ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                    : 'flex items-center py-4 pl-10',
                                    'hover:bg-primary-600 hover:text-white'
                                )}
                                >
                                    {typeof window !== 'undefined' && window.location.pathname === '/dashboard' && (
                                        <>
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                        </>
                                    )}
                                    <span className='mr-3'>
                                        <FaHome size={24}></FaHome>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/customer'>
                                <a className={classNames(
                                    '', typeof window !== 'undefined' && window.location.pathname === '/customer'
                                    ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                    : 'flex items-center py-4 pl-10',
                                    'hover:bg-primary-600 hover:text-white'
                                )}
                                >
                                    {typeof window !== 'undefined' && window.location.pathname === '/customer' && (
                                        <>
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                        </>
                                    )}
                                    <span className='mr-3'>
                                        <FaChalkboardTeacher size={24}></FaChalkboardTeacher>
                                    </span>
                                    <span>Customer</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/fundraising'>
                                <a className={classNames(
                                    '', typeof window !== 'undefined' && window.location.pathname === '/fundraising'
                                    ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                    : 'flex items-center py-4 pl-10',
                                    'hover:bg-primary-600 hover:text-white'
                                )}
                                >
                                    {typeof window !== 'undefined' && window.location.pathname === '/fundraising' && (
                                        <>
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                        </>
                                    )}
                                    <span className='mr-3'>
                                        <FaCoins size={24}></FaCoins>
                                    </span>
                                    <span>Fundraising</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/volunteer'>
                                <a className={classNames(
                                    '', typeof window !== 'undefined' && window.location.pathname === '/volunteer'
                                    ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                    : 'flex items-center py-4 pl-10',
                                    'hover:bg-primary-600 hover:text-white'
                                )}
                                >
                                    {typeof window !== 'undefined' && window.location.pathname === '/volunteer' && (
                                        <>
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                        </>
                                    )}
                                    <span className='mr-3'>
                                        <FaHandHoldingHeart size={24}></FaHandHoldingHeart>
                                    </span>
                                    <span>Volunteer</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href='/news'>
                                <a className={classNames(
                                    '', typeof window !== 'undefined' && window.location.pathname === '/news'
                                    ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                    : 'flex items-center py-4 pl-10',
                                    'hover:bg-primary-600 hover:text-white'
                                )}
                                >
                                    {typeof window !== 'undefined' && window.location.pathname === '/news' && (
                                        <>
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                        </>
                                    )}
                                    <span className='mr-3'>
                                        <FaArchive size={24}></FaArchive>
                                    </span>
                                    <span>News</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Bottom List Items */}
                <div className='absolute bottom-0 left-0 w-72 mb-5'>
                    <nav>
                        <ul>
                            <li>
                                <Link legacyBehavior href='/help'>
                                    <a className={classNames(
                                        '', typeof window !== 'undefined' && window.location.pathname === '/help'
                                        ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                        : 'flex items-center py-4 pl-10',
                                        'hover:bg-primary-600 hover:text-white'
                                    )}
                                    >
                                        {typeof window !== 'undefined' && window.location.pathname === '/help' && (
                                            <>
                                                <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                            </>
                                        )}
                                        <span className='mr-3'>
                                            <MdHelp size={24}></MdHelp>
                                        </span>
                                        <span>Help</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link legacyBehavior href='/settings'>
                                    <a className={classNames(
                                        '', typeof window !== 'undefined' && window.location.pathname === '/settings'
                                        ? `flex items-center py-4 bg-primary-100 text-primary-600 font-bold rounded-lg`
                                        : 'flex items-center py-4 pl-10',
                                        'hover:bg-primary-600 hover:text-white'
                                    )}
                                    >
                                        {typeof window !== 'undefined' && window.location.pathname === '/settings' && (
                                            <>
                                                <span className='h-6 w-2 bg-primary-600 rounded-r mr-8'></span>
                                            </>
                                        )}
                                        <span className='mr-3'>
                                            <AiFillSetting size={24}></AiFillSetting>
                                        </span>
                                        <span>Settings</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;