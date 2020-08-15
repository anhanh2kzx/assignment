import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import apiProduct from "../../../../api/productApi";

const Detail = props => {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await apiProduct.get(id);
                setProduct(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProducts();
    }, []);
    return (
        <div>
            <div className="ads-grid_shop">
                <div className="shop_inner_inf">
                    <div className="col-md-4 single-right-left ">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">
                                <div className="clearfix" />
                                <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative' }}>
                                    <ul className="slides" >
                                        <li  style={{ width: '50px', float: 'left', display: 'block' }} className="clone" aria-hidden="true">
                                            <div> <img src={product.image} /> </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 single-right-left simpleCart_shelfItem">
                        <h3>{product.name}</h3>
                        <p><span className="item_price">{product.price}</span>
                            <del>$1,199</del>
                        </p>
                        <div className="rating1">
                            <ul className="stars">
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-star" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                        <div className="description">
                            <h5>Check delivery, payment options and charges at your location</h5>
                            <form action="#" method="post">
                                <input type="text" defaultValue="Enter pincode" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter pincode';}" required />
                                <input type="submit" defaultValue="Check" />
                            </form>
                        </div>
                        <div className="color-quality">
                            <div className="color-quality-right">
                                <h5>Quality :</h5>
                                <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                    <option value="null">5 Qty</option>
                                    <option value="null">6 Qty</option>
                                    <option value="null">7 Qty</option>
                                    <option value="null">10 Qty</option>
                                </select>
                            </div>
                        </div>
                        <div className="occasional">
                            <h5>Types :</h5>
                            <div className="colr ert">
                                <label className="radio"><input type="radio" name="radio" defaultChecked /><i />Casual Shoes</label>
                            </div>
                            <div className="colr">
                                <label className="radio"><input type="radio" name="radio" /><i />Sneakers </label>
                            </div>
                            <div className="colr">
                                <label className="radio"><input type="radio" name="radio" /><i />Formal Shoes</label>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="occasion-cart">
                            <div className="shoe single-item single_page_b">
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="shoe_item" defaultValue="Chikku Loafers" />
                                    <input type="hidden" name="amount" defaultValue={405.00} />
                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button add" />
                                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                                </form>
                            </div>
                        </div>
                        <ul className="social-nav model-3d-0 footer-social social single_page">
                            <li className="share">Share On : </li>
                            <li>
                                <a href="#" className="facebook">
                                    <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                    <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <div className="front"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                    <div className="back"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram">
                                    <div className="front"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                    <div className="back"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="pinterest">
                                    <div className="front"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                                    <div className="back"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                    {/*/tabs*/}
                    <div className="responsive_tabs">
                        <div id="horizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
                            <div className="resp-tabs-container">
                                {/*/tab_one*/}
                                <h2 className="resp-accordion resp-tab-active" role="tab" aria-controls="tab_item-0"><span className="resp-arrow" />Description</h2><div className="tab1 resp-tab-content resp-tab-content-active" style={{ display: 'block' }} aria-labelledby="tab_item-0">
                                    <div className="single_page">
                                        {product.desc}
                                    </div>
                                </div>
                                {/*//tab_one*/}
                                <div className="tab2 resp-tab-content" aria-labelledby="tab_item-1">
                                    <div className="single_page">
                                        <div className="bootstrap-tab-text-grids">
                                            <div className="add-review">
                                                <h4>add a review</h4>
                                                <form action="#" method="post">
                                                    <input type="text" name="Name" required="Name" />
                                                    <input type="email" name="Email" required="Email" />
                                                    <textarea name="Message" required defaultValue={""} />
                                                    <input type="submit" defaultValue="SEND" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab3 resp-tab-content" aria-labelledby="tab_item-2">
                                    <div className="single_page">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//tabs*/}
                    {/* /new_arrivals */}
                    {/*//new_arrivals*/}
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
