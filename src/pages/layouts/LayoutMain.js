import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Sidebar from '../../components/Main/Sidebar';
import Slider from '../../components/Main/Slider'
import Letter from '../../components/Main/Letter';
export default ({ children }) => {

    return (
        <div>
        <Header />
        {/* //banner */}
        {/* top Products */}
        <div className="ads-grid_shop">
          <div className="shop_inner_inf">
            {/* tittle heading */}
            {/* //tittle heading */}
            {/* product left */}
            <Sidebar />
            {/* //product left */}
            {/* product right */}
            <div className="left-ads-display col-md-9">
                    {children}
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //top products */}
        <Slider />
        {/* /newsletter*/}
        <Letter />
        {/* //newsletter*/}
        {/* footer */}
       <Footer />
        {/* //footer */}
        <a href="#home" id="toTop" className="scroll" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
        {/* js */}
        {/* //js */}
        {/* cart-js */}
        {/* //cart-js */}
        {/* /nav */}
        {/* //nav */}
        {/*search-bar*/}
        {/*//search-bar*/}
        {/* price range (top products) */}
        {/* //price range (top products) */}
        {/* start-smoth-scrolling */}
        {/* //end-smoth-scrolling */}
      </div>
        
    )
}
