import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import TableProduct from "./components/TableProduct";

import { listProduct } from "../utils/APIRoutes";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(listProduct).then((res) => { 
      setProducts(res.data);
    });

    axios.get(category).then((res) => { 
      setCategory(res.data);
    });

  }, []);
  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                <Nav.Link eventKey="three">Product</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="one">content Dashboard</Tab.Pane>
              <Tab.Pane eventKey="two">
                <TableProduct data={products} />
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <TableProduct data={category} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Dashboard;
