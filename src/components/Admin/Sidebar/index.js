import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
  return (
    <div className="sidebar-menu">
      <header className="logo1">
        <a href="#" className="sidebar-icon"> <span className="fa fa-bars" /> </a>
      </header>
      <div style={{ borderTop: '1px ridge rgba(255, 255, 255, 0.15)' }} />
      <div className="menu">
        <ul id="menu">
          <li><Link to="/admin"><i className="fa fa-tachometer" /> <span>Dashboard</span><div className="clearfix" /></Link></li>
          <li><Link to="/admin/products"><i className="fa fa-product-hunt" aria-hidden="true" /><span>Product</span><div className="clearfix" /></Link></li>
          <li id="menu-academico"><a href="charts.html"><i className="fa fa-bar-chart" /><span>Charts</span><div className="clearfix" /></a></li>
          <li id="menu-academico"><a href="#"><i className="fa fa-list-ul" aria-hidden="true" /><span> Short Codes</span> <span className="fa fa-angle-right" style={{ float: 'right' }} /><div className="clearfix" /></a>
            <ul id="menu-academico-sub">
              <li id="menu-academico-avaliacoes"><a href="icons.html">Icons</a></li>
              <li id="menu-academico-avaliacoes"><a href="typography.html">Typography</a></li>
              <li id="menu-academico-avaliacoes"><a href="faq.html">Faq</a></li>
            </ul>
          </li>
          <li id="menu-academico"><a href="errorpage.html"><i className="fa fa-exclamation-triangle" aria-hidden="true" /><span>Error Page</span><div className="clearfix" /></a></li>
          <li id="menu-academico"><a href="#"><i className="fa fa-cogs" aria-hidden="true" /><span> UI Components</span> <span className="fa fa-angle-right" style={{ float: 'right' }} /><div className="clearfix" /></a>
            <ul id="menu-academico-sub">
              <li id="menu-academico-avaliacoes"><a href="button.html">Buttons</a></li>
              <li id="menu-academico-avaliacoes"><a href="grid.html">Grids</a></li>
            </ul>
          </li>
          <li><a href="tabels.html"><i className="fa fa-table" />  <span>Tables</span><div className="clearfix" /></a></li>
          <li><a href="maps.html"><i className="fa fa-map-marker" aria-hidden="true" />  <span>Maps</span><div className="clearfix" /></a></li>
          <li id="menu-academico"><a href="#"><i className="fa fa-file-text-o" />  <span>Pages</span> <span className="fa fa-angle-right" style={{ float: 'right' }} /><div className="clearfix" /></a>
            <ul id="menu-academico-sub">
              <li id="menu-academico-boletim"><a href="calendar.html">Calendar</a></li>
              <li id="menu-academico-avaliacoes"><a href="signin.html">Sign In</a></li>
              <li id="menu-academico-avaliacoes"><a href="signup.html">Sign Up</a></li>
            </ul>
          </li>
          <li><a href="#"><i className="fa fa-check-square-o nav_icon" /><span>Forms</span> <span className="fa fa-angle-right" style={{ float: 'right' }} /><div className="clearfix" /></a>
            <ul>
              <li><a href="input.html"> Input</a></li>
              <li><a href="validation.html">Validation</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar
