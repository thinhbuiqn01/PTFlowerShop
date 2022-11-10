import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"; 
import InputSearch from "./InputSearch";
const TableProduct = (props) => {
  const products = props.data.products;
  const placeholder = "Input your product";
  return (
    <Container style={{ background: "#EDEDED"}}> 
      <InputSearch placeholder={placeholder} />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Xuất xứ</th>
            <th>Giá</th>
            <th>Đã mua</th>
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
                <Button variant="primary" size="sm">
                  Repair
                </Button>
                <span> </span>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableProduct;
