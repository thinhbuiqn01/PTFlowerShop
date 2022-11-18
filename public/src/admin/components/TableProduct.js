import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";
import { deleteProduct } from "../../utils/APIRoutes";
import { Link } from "react-router-dom"; 

const TableProduct = (props) => {
  const products = props.data.products;

  const [idDelete, setIdDelete] = useState();
  const [inputSearch, setInputSearch] = useState("");
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  const handleConfirm = async () => {
    await axios.delete(`${deleteProduct}/${idDelete}/delete`).then((res) => {});
    setShow(false);
  };

  const handleRepair = (_id) => {};

  const handleOnChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    // const data = await axios.get(`${searchProduct}${inputSearch}`)
  }; 

  return (
    <Container style={{ background: "#EDEDED" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputGroup className="mb-6">
          <Form.Control
            placeholder="Input data ..."
            onChange={(e) => handleOnChange(e)}
          />
          <Button variant="info" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </form>
      <Table hover>
        <thead>
          <tr> 
            <th>#</th>
            <th>Name</th>
            
            <th>Origin</th>
            <th>Price</th>
            <th>Image</th>
            <th>Sold</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.nameproduct}</td>
              <td>{product.origin}</td>
              <td>{product.price}</td>
              <td>
                <img src={`http://localhost:3000/3fc71ff6-4d0b-4f89-bb30-cd95615b186e`} alt="" style={{ width: "300px", height: "300px" }} />{" "}
              </td>
              <td>{product.vote}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e) => handleRepair(e)}
                >
                  <Link
                    to={`/admin/product/${product._id}/`}
                    className="color-white"
                  >
                    Repair
                  </Link>
                </Button>
                <span></span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={(e) => {
                    setShow(true);
                    setIdDelete(product._id);
                  }}
                >
                  Delete
                </Button>
                {/* Modal */}
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>You have certain delete this product</Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={(e) => handleConfirm(e)}>
                      Confirm
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/*End Modal */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableProduct;
