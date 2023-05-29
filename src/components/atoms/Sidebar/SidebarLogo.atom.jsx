import React from "react";
import Image from "next/image";
import sociops from "../../../../public/sociops.svg";

const SidebarLogo = () => {
    return (
        <div className='flex h-16 my-4'>
            <Image alt='icon' src={sociops}></Image>
        </div>
    );
};

export default SidebarLogo;
