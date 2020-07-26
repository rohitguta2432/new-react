import React,{useState,useEffect} from 'react';
import '../AddProduct/AddProduct.scss';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import CategoryModal from '../Modal/CategoryModal';
import { Modal } from 'react-bootstrap'

function CreateProduct() {

    const token = sessionStorage.getItem('token')
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcatgory] = useState([]);
    const [product, setProduct] = useState([]);
    const [show,setShow] = useState(false)
    
useEffect(() => {
        Axios.get('http://13.234.77.33:1234/api/v1/category',{headers:{
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

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

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
                                        <label>Category</label>
                                            <select name="category" onChange={categoryHandler}>
                                            <option>select category</option>
                                            {
                                                category.map((item)=>{
                                                        return (<option value={item.id} key={item.id}>{item.name}</option>)
                                                })
                                            }</select>
                                            <Link to="#" onClick={handleShow} className="newaddbtn"><small>+ Add New Category</small></Link>
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
                                            <Link to="#" className="newaddbtn"><small>+ Add New subcategory</small></Link>
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
                                            <Link to="#" className="newaddbtn"><small>+ Add New product</small></Link>
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
            <CategoryModal show={show} onhide={handleClose}/>
            </>
    )
}

export default CreateProduct
