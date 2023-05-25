import React, { useState } from "react";
import Sidebar from "../organisms/Sidebar.organism";
import Header from "../organisms/Header.organism";

const DefaultTemplate = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className='flex h-screen overflow-hidden bg-white'>
                {/* ===== Sidebar Start ===== */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* ===== Sidebar End ===== */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div
                    className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden 
                    ${sidebarOpen ? 'w-[calc(100% - 16rem)]' : 'w-full'
                        }`}
                >
                    {/* ===== Header Start ===== */}
                    <Header toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
                    {/* ===== Header End ===== */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                            {props.children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    );
};

export default DefaultTemplate;