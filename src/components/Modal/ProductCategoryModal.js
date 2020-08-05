import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import '../Modal/ModalStyle.scss';
import Axios from 'axios';


function ProductCategoryModal(props) {
  const token = sessionStorage.getItem('token')
  const [productCate, setProductCate] = useState({
    name: '',
    description: '',
    imgUrl:'',
    price:'',
    discount:''
  });

  useEffect(() => {
  })

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setProductCate((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })

  }
  const getCatValue = () => {
    console.log(productCate)
    Axios.post('http://localhost:1234/api/v1/subcategory', { 'name': productCate.name, 'description': productCate.description }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <div className="modalStyle">
        <Modal
          show={props.show} onHide={props.onHide} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add New productCate</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalcontent">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                  <input type="text"
                    name="name"
                    placeholder="Product ..."
                    defaultValue={productCate.name}
                    onChange={inputHandler} />
                  </div>

                  <div className="form-group">
                  <input type="text"
                    name="description"
                    placeholder="Description..."
                    defaultValue={productCate.description}
                    onChange={inputHandler} />
                   </div>
                   <div className="form-group">
                  <input type="text"
                    name="img url"
                    placeholder="img url..."
                    defaultValue={productCate.imgUrl}
                    onChange={inputHandler} />
                   </div>
                   <div className="form-group">
                   <input type="text"
                    name="price"
                    placeholder="Price"
                    defaultValue={productCate.price}
                    onChange={inputHandler} />
                   </div>
                   <div className="form-group">
                   <input type="text"
                    name="discount"
                    placeholder="discount"
                    defaultValue={productCate.discount}
                    onChange={inputHandler} />
                   </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btnstyle" onClick={getCatValue}>+ Add </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default ProductCategoryModal;
