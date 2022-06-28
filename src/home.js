import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './sidebar';
import Topbar from './topbar';
function Home() {
  return (
    <>
     <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
<Topbar />
<div className="container-fluid">
<Outlet />
    </div>
    </div>
    </div>
</div>
    </>
  )
}

export default Home;