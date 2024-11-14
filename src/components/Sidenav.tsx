'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import DeviceList from './Devicelist';


function Sidenav() {

  const [isSidebarVisible, setSidebarVisible] = useState(true);

const toggleSidebar = () => {
  setSidebarVisible((prevState) => !prevState);
};


  return (
    <div className=''>
 <aside   className={`fixed shadow-lg  bg-white bg-opacity-20  top-0 right-0 z-40 w-64 h-screen transition-transform ${isSidebarVisible ? "translate-x-0" : "translate-x-[76.5%]"} `}
  id="default-sidebar"  aria-label="Sidebar">
    <button  onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex  z-40  items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg   focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open sidebar</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>
    <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
       <DeviceList/>
    </div>
 </aside>
</div>

  )
}

export default Sidenav
