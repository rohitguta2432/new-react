import React from 'react';
import {Link} from 'react-router-dom';
import '../Products/AllProducts.scss';
function AllProduct() {
    return (
        <>
            <section className="productsItems py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/camrea-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Camera D240</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/mobile-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Android Smart Phone</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/watch-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Smart Watch</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/camera-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Camera D240</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/chair-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Classic Chair</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="featuredImg">
                                    <img className="card-img-top" src="images/mobile-image.jpg" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Android Smart Phone</h5>
                                        <p className="card-text">This is a wider card with supporting text This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <h6>$120.00</h6>
                                        <Link to="" className="cartbtn">Add Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
        </>
    )
}

export default AllProduct;