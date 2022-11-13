import React, { useEffect, useState } from "react";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TableProduct from "./TableProduct";
import { listProduct, listCategory } from "../../utils/APIRoutes";
import axios from "axios";
import NewProduct from "../NewProduct";
import { Link } from "react-router-dom";
const NavFillProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(listProduct).then((res) => {
      setProducts(res.data);
    });

    axios.get(listCategory).then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <div>
      <Tab.Container
        id="left-tabs-example outline-first"
        defaultActiveKey="one"
      >
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="one">List Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="two">New Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={`${props.key}`} disabled>
              Update product
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="one">
            <TableProduct data={products} />
          </Tab.Pane>
          <Tab.Pane eventKey="two">
            <NewProduct data={categories} />
          </Tab.Pane>
          <Tab.Pane eventKey={`${props.key}`}></Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default NavFillProduct;
