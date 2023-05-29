"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sociops from "../../../public/sociops.svg";
import {
    FaArchive,
    FaChalkboardTeacher,
    FaCoins,
    FaHandHoldingHeart,
    FaHome,
} from "react-icons/fa";
import { AiFillSetting, AiOutlineArrowLeft } from "react-icons/ai";
import { MdHelp } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const isActive = (path) => currentPath === path;

    return (
        <div className='h-screen'>
            {/* Sidebar */}
            <aside
                className={`absolute left-0 top-0 z-50 flex h-screen w-[280px] shadow-md
                flex-col overflow-y-hidden bg-white duration-300 ease-linear 
                lg:static lg:translate-x-0
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Logo */}
                <div className='flex h-16 my-4'>
                    <Image alt='icon' src={sociops}></Image>
                    <div className='p-4 text-primary-600 md:hidden block'>
                        <AiOutlineArrowLeft
                            size={24}
                            onClick={toggleSidebar}
                        ></AiOutlineArrowLeft>
                    </div>
                </div>
                {/* List Items */}
                <nav className='mt-8'>
                    <ul>
                        <li>
                            <Link href='/dashboard' >
                                <span
                                    className={`flex items-center py-4 ${isActive("/dashboard")
                                        ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                        : "hover:bg-primary-600 hover:text-white pl-10"
                                        }`}
                                >
                                    {isActive("/dashboard") && (
                                        <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                    )}
                                    <span className='mr-3'>
                                        <FaHome size={24} />
                                    </span>
                                    <span>Dashboard</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/customer'>
                                <span
                                    className={`flex items-center py-4 ${isActive("/customer")
                                        ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                        : "hover:bg-primary-600 hover:text-white pl-10"
                                        }`}
                                >
                                    {isActive("/customer") && (
                                        <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                    )}
                                    <span className='mr-3'>
                                        <FaChalkboardTeacher size={24} />
                                    </span>
                                    <span>Customer</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/fundraising'>
                                <span
                                    className={`flex items-center py-4 ${isActive("/fundraising")
                                        ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                        : "hover:bg-primary-600 hover:text-white pl-10"
                                        }`}
                                >
                                    {isActive("/fundraising") && (
                                        <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                    )}
                                    <span className='mr-3'>
                                        <FaCoins size={24} />
                                    </span>
                                    <span>Fundraising</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/volunteer'>
                                <span
                                    className={`flex items-center py-4 ${isActive("/volunteer")
                                        ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                        : "hover:bg-primary-600 hover:text-white pl-10"
                                        }`}
                                >
                                    {isActive("/volunteer") && (
                                        <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                    )}
                                    <span className='mr-3'>
                                        <FaHandHoldingHeart size={24} />
                                    </span>
                                    <span>Volunteer</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/news'>
                                <span
                                    className={`flex items-center py-4 ${isActive("/news")
                                        ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                        : "hover:bg-primary-600 hover:text-white pl-10"
                                        }`}
                                >
                                    {isActive("/news") && (
                                        <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                    )}
                                    <span className='mr-3'>
                                        <FaArchive size={24} />
                                    </span>
                                    <span>News</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Bottom List Items */}
                <div className='absolute bottom-0 left-0 w-[280px] mb-7'>
                    <nav>
                        <ul>
                            <li>
                                <Link href='/help'>
                                    <span
                                        className={`flex items-center py-4 ${isActive("/help")
                                            ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                            : "hover:bg-primary-600 hover:text-white pl-10"
                                            }`}
                                    >
                                        {isActive("/help") && (
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                        )}
                                        <span className='mr-3'>
                                            <MdHelp size={24} />
                                        </span>
                                        <span>Help</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/settings'>
                                    <span
                                        className={`flex items-center py-4 ${isActive("/settings")
                                            ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
                                            : "hover:bg-primary-600 hover:text-white pl-10"
                                            }`}
                                    >
                                        {isActive("/settings") && (
                                            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
                                        )}
                                        <span className='mr-3'>
                                            <AiFillSetting size={24} />
                                        </span>
                                        <span>Settings</span>
                                    </span>
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