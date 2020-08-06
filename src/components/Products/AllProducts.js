import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Products/AllProducts.scss';
import { ENV } from '../constants/Url'
import Axios from 'axios';
function AllProduct() {

    const userId = sessionStorage.getItem('userId')
    const token = sessionStorage.getItem('token')
    const [productList, setProductList] = useState([]);
    const [quantityCount, setQuantityCount] = useState({});
    const [quanNo, setquanNo] =useState(0);

    
    useEffect(() => {
        Axios.get(ENV.URL + '/category', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setProductList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    const addToCart = (e, id) => {
        if (quantityCount[id]) {
            quantityCount[id] = quantityCount[id] + 1;
        } else {
            quantityCount[id] = 1;
        }
        e.quantity = quantityCount[id];
        setQuantityCount({ ...quantityCount });
        const cart ={'userId':userId,'productId':e.id,'quantity':e.quantity}
        Axios.post(ENV.URL+'/cart',cart,{headers:{
            Authorization: `Bearer ${token}`
        }}).then((response)=>{
        
        }).catch((error)=>{
                console.log(error)
        })
    }
    const removeToCart = (e, id) => {
        if (quantityCount[id] && quantityCount[id] > 0) {
            quantityCount[id] = quantityCount[id] - 1;
        } else {
            quantityCount[id] = 0;
        }
        e.quantity = quantityCount[id];
        setQuantityCount({ ...quantityCount })
        const cart ={'userId':userId,'productId':e.id,'quantity':e.quantity}
        Axios.post(ENV.URL+'/cart',cart,{headers:{
            Authorization: `Bearer ${token}`
        }}).then((response)=>{
        
        }).catch((error)=>{
                console.log(error)
        })

    }
    useEffect(() => {
            Axios.get(ENV.URL+'/cart',{headers:
              { Authorization: `Bearer ${token}`}
            }).then((response)=>{
                for(var i=0;i<=response.data.length;i++){
                        const id = response.data[i].product.id
                        const quan = response.data[i].quantity;
                        quantityCount[id]=quan
                        Axios.get(ENV.URL+'/product/'+id,{headers:{
                            Authorization:`Bearer ${token}`
                        }})
                        .then((response)=>{
                            setQuantityCount({...quantityCount})     
                        }).catch((error)=>{
                                console.log(error)
                        })
                }
            }).catch((error)=>{
            })
    }, [])
    
   

    return (
        
        <>
        <div className="w-100 py-3">
            <div className="col-12">
                <Link to="/Cart" className="btn btn-success">Checkout</Link>
            </div>
        </div>
        {productList.map((item) => {
            return (
                <div className="col-md-4 mb-4" key={item.id}>
                    {
                        item.subCategories.map((el) => {
                            return (
                                <div className="card-deck" key={el.id}>
                                    {
                                        el.products.map((e) => {
                                            return (
                                                <div className="card" key={e.id}>
                                                    <div className="featuredImg">
                                                        <span className="discount"><small>Discount</small><br></br>{e.discount}%</span>
                                                        <img className="card-img-top" src={e.imgUrl} alt="" />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{e.name}</h5>
                                                        <p className="card-text">{e.description}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <h6>${e.price}</h6>
                                                        {
                                                            quantityCount[e.id]>0 ?         
                                                            <>
                                                            <div className="input-group">
                                                            <input type="button" defaultValue="-" className="button-minus" onClick={() => removeToCart(e, e.id)} />

                                                            <input type="text" className="quantity-field"  value={quantityCount[e.id]} placeholder="0" readOnly />

                                                            <input type="button" defaultValue="+" className="button-plus" onClick={() => addToCart(e, e.id)} />
                                                        </div>
                                                            </> :  <Link to="#" className="cartbtn" onClick={() => addToCart(e, e.id)}>Add Cart</Link>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
        }

        </>
    )
}

export default AllProduct;