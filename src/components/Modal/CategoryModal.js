import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import '../Modal/ModalStyle.scss';
import Axios from 'axios';


function CategoryModal(props) {
  const token = sessionStorage.getItem('token')
  const [category, setCategory] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
  })

  const inputHandler = (e,validators) => {
    const { value, name } = e.target;
    setCategory((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })

  }

  const getCatValue = () => {

    const categoryName = category.name;
    const categoryDescription = category.description;

    Axios.post('http://localhost:1234/api/v1/category', { 'name': category.name, 'description': category.description }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
    }).catch((error) => {
      console.log(error)
    })
  }

  function noBlanks(value) {
    return {
      valid: value.replace(/\s+/, "").length > 0,
      message: "cannot be blank"
    }
  }

  return (
    <>
      <div className="modalStyle">
        <Modal
          show={props.show} onHide={props.onHide} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalcontent">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text"
                      name="name"
                      placeholder="Category..."
                      defaultValue={category.name}
                      onChange={(e) => inputHandler(e,[noBlanks])} />
                  </div>

                  <div className="form-group">
                    <input type="text"
                      name="description"
                      placeholder="Description..."
                      defaultValue={category.description}
                      onChange={(e) => inputHandler(e,[noBlanks])} 
                      />
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

export default CategoryModal;
