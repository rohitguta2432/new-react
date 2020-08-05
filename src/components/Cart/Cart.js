import React,{useState,useEffect} from 'react';
import '../Cart/Cart.scss';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import {ENV} from '../constants/Url'

function Cart() {
    const token = sessionStorage.getItem('token')
    const[product,setProduct] = useState()
    useEffect(() => {
        Axios.get(ENV.URL+'/cart',{headers:
          { Authorization: `Bearer ${token}`}
        }).then((response)=>{
            for(var i=0;i<=response.data.length;i++){
                    const id = response.data[i].productId
                    Axios.get(ENV.URL+'/product/'+id,{headers:{
                        Authorization:`Bearer ${token}`
                    }})
                    .then((response)=>{
                        //console.log(response.data)
                        setProduct(response.data)
                        //setProduct(response.data)     
                    }).catch((error)=>{
                            console.log(error)
                    })
            }
        }).catch((error)=>{
        })
}, [])
    return(
        <>
        <section className="cart-product py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        {
                            product.map((item)=> {
                                return (
                                    <div className="d-flex bd-highlight repeater">
                                        <div className="pr-3 flex-grow-1 bd-highlight">
                                            <div className="productImg"><img alt="" src={item.imgUrl}/></div>
                                            <div className="content">
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                                <span><b>Quantity : </b>{item.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="bd-highlight align-items-center ml-auto"><div className="action"><Link to='#'>Delete</Link></div></div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart;