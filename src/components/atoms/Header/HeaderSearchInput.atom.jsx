import React from "react";

const HeaderSearchInput = () => {
    return (
        <div className='flex-1 md:flex hidden pl-4'>
            <input
                type='text'
                placeholder='Cari'
                className='input input-bordered bg-gray-100 rounded-2xl'
            />
        </div>
    );
};

export default HeaderSearchInput;
