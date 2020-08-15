import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({products}) => {
    return (
        <div className="wrapper_top_shop">
        <div className="col-md-6 shop_left">
          <img src="images/banner3.jpg" alt="" />
          <h6>40% off</h6>
        </div>
        <div className="col-md-6 shop_right">
          <img src="images/banner2.jpg" alt="" />
          <h6>50% off</h6>
        </div>
        <div className="clearfix" />
        {/* product-sec1 */}
        <div className="product-sec1">
        {products.map(({ id, name, image, price }, index) => (
                          <div className="col-md-4 product-men" key={index}>
            <div className="product-shoe-info shoe">
              <div className="men-pro-item">
                <div className="men-thumb-item">
                  <img src={image} alt="" />
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <Link to={`/product/${id}`} className="link-product-add-cart">Quick View</Link>
                      
                    </div>
                  </div>
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                  <h4>
                    <a href="single.html">{name} </a>
                  </h4>
                  <div className="info-product-price">
                    <div className="grid_meta">
                      <div className="product_price">
                        <div className="grid-price ">
        <span className="money ">{price}</span>
                        </div>
                      </div>
                      <ul className="stars">
                        <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                    <div className="shoe single-item hvr-outline-out">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="shoe_item" defaultValue="Bella Toes" />
                        <input type="hidden" name="amount" defaultValue={675.00} />
                        <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></button>
                        <a href="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        ))}
          {/*/mens*/}

          {/* //womens */}
          {/* /mens */}

          {/* //mens */}
          <div className="clearfix" />
        </div>
        {/* //product-sec1 */}
        <div className="col-md-6 shop_left shp">
          <img src="images/banner4.jpg" alt="" />
          <h6>21% off</h6>
        </div>
        <div className="col-md-6 shop_right shp">
          <img src="images/banner1.jpg" alt="" />
          <h6>31% off</h6>
        </div>
        <div className="clearfix" />
      </div>
    )
}

Home.propTypes = {

}

export default Home
