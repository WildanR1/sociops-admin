import React from "react";
import Link from "next/link";
import avatar from "../../../../public/avatar.svg";
import Image from "next/image";

const HeaderNotificationDropdown = () => {
  return (
    <>
      <div className='form-control hover:bg-slate-400 hover:rounded-lg'>
        <div className='indicator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            />
          </svg>
          <span className='badge badge-xs badge-primary indicator-item'></span>
        </div>
      </div>
      <div className='dropdown dropdown-end ml-8 mr-4'>
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
    </>
  );
};

export default HeaderNotificationDropdown;
