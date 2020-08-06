import React,{useState,useEffect,useLayoutEffect, useRef} from 'react';
import '../Cart/Cart.scss';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import {ENV} from '../constants/Url'

function Cart() {
    
    const token = sessionStorage.getItem('token')
    const[product,setProduct] = useState([])
    
     useEffect(() => {
        Axios.get(ENV.URL+'/cart',{headers:
          { Authorization: `Bearer ${token}`}
        }).then((response)=>{
            sessionStorage.setItem('productCount',response.data.length)
            setProduct(response.data)
            /* for(var i=0;i<=response.data.length;i++){
                    const id = response.data[i].product.id
                    Axios.get(ENV.URL+'/product/'+id,{headers:{
                        Authorization:`Bearer ${token}`
                    }})
                    .then((response)=>{
                        product.push({...response.data})
                        setProduct([...product])
                    }).catch((error)=>{
                            console.log(error)
                    })
            } */
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
                                    <div className="d-flex bd-highlight repeater" key={item.product.id}>
                                        <div className="pr-3 flex-grow-1 bd-highlight">
                                            <div className="productImg"><img alt="" src={item.product.imgUrl}/></div>
                                            <div className="content">
                                                <h5>{item.product.name}</h5>
                                                <p>{item.product.description}</p>
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