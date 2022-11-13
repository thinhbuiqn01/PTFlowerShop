import React from "react";
import NavFillProduct from "./components/NavFillProduct";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="product">
        <Row>
          <Col sm={3} bg="info">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">
                  <Link to="/admin">Dashboard</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="product">Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="category">
                  <Link to="/admin/category">Category</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="product">
                <NavFillProduct />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Product;
