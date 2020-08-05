import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import '../Modal/ModalStyle.scss';
import Axios from 'axios';


function SubCategoryModal(props) {
  const token = sessionStorage.getItem('token')
  const [subcategory, setsubCategory] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
  })

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setsubCategory((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })

  }

  const getCatValue = () => {
    console.log(subcategory)
    Axios.post('http://localhost:1234/api/v1/category', { 'name': '', 'description': '', 'subCategories': [{ 'name': subcategory.name, 'description': subcategory.description }], 'products': [{ 'name': '', 'description': '' }]}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response)
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
            <Modal.Title>Add New subcategory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalcontent">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text"
                      name="name"
                      placeholder="subcategory..."
                      defaultValue={subcategory.name}
                      onChange={inputHandler} />
                  </div>

                  <div className="form-group">
                    <input type="text"
                      name="description"
                      placeholder="Description..."
                      defaultValue={subcategory.description}
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

export default SubCategoryModal;
