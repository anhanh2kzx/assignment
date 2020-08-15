import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = props => {
    return (
        <div>
                        <div className="side-bar col-md-3">
              <div className="search-hotel">
                <h3 className="agileits-sear-head">Search Here..</h3>
                <form action="#" method="post">
                  <input type="search" placeholder="Product name..." name="search" required />
                  <input type="submit" defaultValue=" " />
                </form>
              </div>
              {/* price range */}
              <div className="range">
                <h3 className="agileits-sear-head">Price range</h3>
                <ul className="dropdown-menu6">
                  <li>
                    <div id="slider-range" />
                    <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
                  </li>
                </ul>
              </div>
              {/* //price range */}
              {/*preference */}
              <div className="left-side">
                <h3 className="agileits-sear-head">Occasion</h3>
                <ul>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Casuals</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Party</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Wedding</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Ethnic</span>
                  </li>
                </ul>
              </div>
              {/* // preference */}
              {/* discounts */}
              <div className="left-side">
                <h3 className="agileits-sear-head">Discount</h3>
                <ul>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">5% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">10% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">20% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">30% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">50% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">60% or More</span>
                  </li>
                </ul>
              </div>
              {/* //discounts */}
              {/* reviews */}
              <div className="customer-rev left-side">
                <h3 className="agileits-sear-head">Customer Review</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <span>5.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <span>4.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <span>3.5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <span>3.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                      <span>2.5</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* //reviews */}
              {/* deals */}
              <div className="deal-leftmk left-side">
                <h3 className="agileits-sear-head">Special Deals</h3>
                <div className="special-sec1">
                  <div className="col-xs-4 img-deals">
                    <img src="images/s4.jpg" alt="" />
                  </div>
                  <div className="col-xs-8 img-deal1">
                    <h3>Shuberry Heels</h3>
                    <a href="single.html">$180.00</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="special-sec1">
                  <div className="col-xs-4 img-deals">
                    <img src="images/s2.jpg" alt="" />
                  </div>
                  <div className="col-xs-8 img-deal1">
                    <h3>Chikku Loafers</h3>
                    <a href="single.html">$99.00</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="special-sec1">
                  <div className="col-xs-4 img-deals">
                    <img src="images/s1.jpg" alt="" />
                  </div>
                  <div className="col-xs-8 img-deal1">
                    <h3>Bella Toes</h3>
                    <a href="single.html">$165.00</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="special-sec1">
                  <div className="col-xs-4 img-deals">
                    <img src="images/s5.jpg" alt="" />
                  </div>
                  <div className="col-xs-8 img-deal1">
                    <h3>Red Bellies</h3>
                    <a href="single.html">$225.00</a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="special-sec1">
                  <div className="col-xs-4 img-deals">
                    <img src="images/s3.jpg" alt="" />
                  </div>
                  <div className="col-xs-8 img-deal1">
                    <h3>(SRV) Sneakers</h3>
                    <a href="single.html">$169.00</a>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              {/* //deals */}
            </div>
        </div>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
