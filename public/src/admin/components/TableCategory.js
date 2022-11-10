import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import InputSearch from "./InputSearch";

const TableCategory = (props) => {
  const categories = props.data.category; 
  const placeholder = "Input your category";
  return (
    <Container style={{ background: "#EDEDED" }}>
      <InputSearch placeholder={placeholder} />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.namecategory}</td> 
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

export default TableCategory;
