import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <div className="banner_top innerpage" id="home">
        <div className="wrapper_top_w3layouts">
          <div className="header_agileits">
            <div className="logo inner_page_log">
              <h1><a className="navbar-brand" href="index.html"><span>Downy</span> <i>Shoes</i></a></h1>
            </div>
            <div className="overlay overlay-contentpush">
              <button type="button" className="overlay-close"><i className="fa fa-times" aria-hidden="true" /></button>
              <nav>
                <ul>
                  <li><Link to="/" className="active">Home</Link></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="404.html">Team</a></li>
                  <li><a href="shop.html">Shop Now</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="mobile-nav-button">
              <button id="trigger-overlay" type="button"><i className="fa fa-bars" aria-hidden="true" /></button>
            </div>
            {/* cart details */}
            <div className="top_nav_right">
              <div className="shoecart shoecart2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  <button className="top_shoe_cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //cart details */}
        {/* search */}
        <div className="search_w3ls_agileinfo">
          <div className="cd-main-header">
            <ul className="cd-header-buttons">
              <li><a className="cd-search-trigger" href="#cd-search"> <span /></a></li>
            </ul>
          </div>
          <div id="cd-search" className="cd-search">
            <form action="#" method="post">
              <input name="Search" type="search" placeholder="Click enter after typing..." />
            </form>
          </div>
        </div>
        {/* //search */}
        <div className="clearfix" />
        {/* /banner_inner */}
        <div className="services-breadcrumb_w3ls_agileinfo">
          <div className="inner_breadcrumb_agileits_w3">
            <ul className="short">
              <li><Link to="/">Home</Link><i>|</i></li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        {/* //banner_inner */}
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
