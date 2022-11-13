import React from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import Header from "./components/Header";

import NavFillCategory from "./components/NavFillCategory";
const Category = () => {
  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="category">
        <Row>
          <Col sm={3} bg="info">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">
                  <Link to="/admin">Dashboard</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="product"  >
                  <Link to="/admin/product">Product</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="category">Category</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="category">
                <NavFillCategory />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Category;
