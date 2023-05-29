import React from "react";
import Link from "next/link";
import avatar from "../../../../public/avatar.svg";
import Image from "next/image";

const HeaderNotificationDropdown = () => {
    return (
        <div className='dropdown dropdown-end mx-4'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                    <Image alt='avatar' src={avatar}></Image>
                </div>
            </label>
            <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-100 rounded-box w-52'
            >
                <li>
                    <Link legacyBehavior href='/profile'>
                        <a className='justify-between'>
                            Profile
                            <span className='badge'>New</span>
                        </a>
                    </Link>
                </li>
                <Link legacyBehavior href='/settings'>
                    <li>
                        <a>Settings</a>
                    </li>
                </Link>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNotificationDropdown;
