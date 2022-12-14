import React from "react";
import Header from "./components/Header";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import NavFillProduct from "./components/NavFillProduct";
import NavFillCategory from "./components/NavFillCategory";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
        <Row>
          <Col sm={3} bg="info">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="product">
                  <Link to="/admin/product">Product</Link>
                </Nav.Link>
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
              <Tab.Pane eventKey="dashboard">content Dashboard</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Dashboard;
