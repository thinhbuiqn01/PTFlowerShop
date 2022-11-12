import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import InputSearch from "./InputSearch";

import axios from "axios";
import { deleteProduct } from "../../utils/APIRoutes";
import { Link } from "react-router-dom";

const TableProduct = (props) => {
  const products = props.data.products;
  const placeholder = "Input your product";

  const [confirm, setConfirm] = useState(false);

  const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);

  const handleDeleteProduct = async (_id) => {
    await axios.delete(`${deleteProduct}/${_id}/delete`).then((res) => {});
  };

  const handleConfirm = async (_id) => {};

  const handleRepair = (_id) => {};

  return (
    <Container style={{ background: "#EDEDED" }}>
      <InputSearch placeholder={placeholder} />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Origin</th>
            <th>Price</th>
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
              <td>{product.vote}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e) => handleRepair(e)}
                >
                  <Link to={`/admin/product/${product._id}/`} className="color-white">Repair</Link>
                </Button>
                <span></span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={(e) => handleDeleteProduct(product._id)}
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
