"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div>
      <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}/>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="p-4 sm:ml-64">
        {children}
      </div>

    </div>
  )
}

export default Layout