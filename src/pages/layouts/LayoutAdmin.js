import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'

export default ({ children }) => {
    return (
        <div className="page-container">
        {/*/content-inner*/}
        <div className="left-content">
          <div className="mother-grid-inner">
            {/*header start here*/}
            <Topbar />
            {/*heder end here*/}
            {/* <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a><i className="fa fa-angle-right" />Tables</li>
            </ol> */}
            <div className="agile-grids">	
              {/* tables */}
             {children}
              {/* //tables */}
            </div>
            {/* script-for sticky-nav */}
            {/* /script-for sticky-nav */}
            {/*inner block start here*/}
            <div className="inner-block">
            </div>
            {/*inner block end here*/}
            {/*copy rights start here*/}
            <Footer />
            {/*COPY rights end here*/}
          </div>
        </div>
        {/*//content-inner*/}
        {/*/sidebar-menu*/}
          <Sidebar />
        <div className="clearfix" />		
      </div>
    )
}

