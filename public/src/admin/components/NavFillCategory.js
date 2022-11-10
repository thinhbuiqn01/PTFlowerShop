import React, { useEffect, useState } from "react";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav"; 
import TableCategory from "./TableCategory";
import {  listCategory } from "../../utils/APIRoutes";
import axios from "axios"; 
import NewProduct from "../NewProduct";
import NewCategory from "../NewCategory";
const NavFillCategory = (props) => { 

  const [categories, setCategories] = useState([]);
  useEffect(() => { 

    axios.get(listCategory).then((res) => {
      setCategories(res.data);
    });

  }, []);  
  return (
    <div>
      <Tab.Container id="left-tabs-example outline-first" defaultActiveKey="one">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="one">List Category</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="two">New Category</Nav.Link>
          </Nav.Item> 
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="one">
            <TableCategory data={categories} />
          </Tab.Pane>
          <Tab.Pane eventKey="two">
            <NewCategory />
          </Tab.Pane> 
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default NavFillCategory;
