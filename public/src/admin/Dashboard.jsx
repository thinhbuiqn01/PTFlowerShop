import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
 
import NavFillProduct from "./components/NavFillProduct";
import NavFillCategory from "./components/NavFillCategory";

const Dashboard = () => {
  
  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="one">
        <Row>
          <Col sm={3} bg="info">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="one">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="two">Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="three">Category</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="one">content Dashboard</Tab.Pane>
              <Tab.Pane eventKey="two"> 
                <NavFillProduct />
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <NavFillCategory />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Dashboard;
