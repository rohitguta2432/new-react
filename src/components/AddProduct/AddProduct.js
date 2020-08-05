import React, { useState, useEffect, useContext } from 'react';
import '../AddProduct/AddProduct.scss';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import CategoryModal from '../Modal/CategoryModal';
import SubCategoryModal from '../Modal/SubCategoryModal';
import ProductCategoryModal from '../Modal/ProductCategoryModal';

function CreateProduct() {
    const token = sessionStorage.getItem('token')
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcatgory] = useState([]);
    const [product, setProduct] = useState([]);
    
useEffect(() => {
        Axios.get('http://localhost:1234/api/v1/category',{headers:{
            Authorization:`Bearer ${token}`
        }})
        .then((response)=>{
            setCategory(response.data)
                
        }).catch((error)=>{
                console.log(error)
        })
    }, [])

    const categoryHandler = (e)=>{
            let categoryId = e.target.value;
            category.forEach((c)=>{
                    if(c.id === categoryId){
                        setSubcatgory(c.category)
                    }
            })
    }
    const subcategoryHandler = (e) =>{
            let sbId = e.target.value;
            subcategory.forEach((sub)=>{
                if(sub.id === sbId){
                    setProduct(sub.products)
                }
            })
    }

    // For Modal Open & Close
    const [show, setShow] = useState(false);
    const handleClose = () =>  {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }



    const [showsub, setShowsub] = useState(false);
    const _handleClose = () =>  {
        setShowsub(false)
    }
    const _handleShow = () => {
        setShowsub(true)
    }


    const [productShow, setProductShow] = useState(false);
    const _closeModal = () =>  {
        setProductShow(false)
    }
    const _showModal = () => {
        setProductShow(true)
    }
    

  return (
            <>
            <section className="loginForm py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <form className="mw-100" >
                            <div className="row profile_content p-4">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Category </label>
                                            <select name="category" onChange={categoryHandler}>
                                            <option>select category</option>
                                            {
                                                category.map((item)=>{
                                                        return (<option value={item.id} key={item.id}>{item.name}</option>)
                                                })
                                            }</select>
                                            <Link to="#" className="newaddbtn" onClick={handleShow}><small>+ Add New Category</small></Link>
                                        </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Sub Category</label>
                                        <select name="subcategory" onChange={subcategoryHandler}>
                                            <option>select subCategory</option>
                                            {
                                                subcategory.map((item)=>{
                                                        return (<option value={item.id} key={item.id}>{item.name}</option>)
                                                })
                                            }</select>
                                            <Link to="#" className="newaddbtn" onClick={_handleShow}><small>+ Add New subcategory</small></Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Products</label>
                                        <select name="product">
                                            <option>select product</option>
                                            {
                                                product.map((item)=>{
                                                        return (<option value={item.id} key={item.id}>{item.name}</option>)
                                                })
                                            }</select>
                                            <Link to="#" className="newaddbtn" onClick={_showModal}><small>+ Add New product</small></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    {/* <div className="form-group mt-3 mb-0">
                                        <input type="submit" value="Create Product" />
                                    </div> */}
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
            <CategoryModal show={show} onHide={handleClose}/>
            <SubCategoryModal show={showsub} onHide={_handleClose}/>
            <ProductCategoryModal show={productShow} onHide={_closeModal}/>
            </>
    )
}

export default CreateProduct
