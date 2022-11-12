import React, { useEffect, useState } from "react";
import Header from "./components/Header";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { getProduct, listCategory, updateProduct } from "../utils/APIRoutes";
export const UpdateProduct = (props) => {
  const { id } = useParams();

  const [values, setValues] = useState({
    nameproduct: "",
    origin: "",
    price: "",
    categoryID: 0,
    image: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(listCategory).then((res) => {
      console.log(res.data.category);
      setCategories(res.data.category);
    });

    axios.get(`${getProduct}/${id}`).then((res) => {
      setValues({
            nameproduct: res.data.nameproduct,
            origin:res.data.origin,
            price:res.data.price,
            categoryID: res.data.categoryID,
            image:res.data.image,
      })
    });
    //setValues(response.data);
  }, []);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nameproduct, origin, price, image, categoryID } = values;
    const { data } = await axios.put(updateProduct, {
      nameproduct,
      origin,
      price,
      categoryID,
      image,
    });    
  };

  return (
    <>
      <Header />
      <Tab.Container id="left-tabs-example" defaultActiveKey="product">
        <Row>
          <Col sm={3} bg="info">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="product">Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="category">Category</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Container
              id="left-tabs-example outline-first"
              defaultActiveKey="three"
            >
              <Nav fill variant="tabs" defaultActiveKey="three">
                <Nav.Item>
                  <Nav.Link eventKey="one" disabled>
                    List Product
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two" disabled>
                    New Product
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three">Update product</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="one"></Tab.Pane>
                <Tab.Pane eventKey="two"></Tab.Pane>
                <Tab.Pane eventKey="three">
                  <div className="product" style={{ margin: "0 auto" }}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <input
                        value={values.nameproduct}
                        type="text"
                        placeholder="Name product"
                        name="nameproduct"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        value={values.origin}
                        type="text"
                        placeholder="Origin"
                        name="origin"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        value={values.price}
                        type="text"
                        placeholder="Price product"
                        name="price"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <select
                        name="categoryID"
                        onChange={(e) => handleOnChange(e)}
                      >
                        {categories?.map((category, index) => (
                          <option key={index} value={values.categoryID}>
                            {category.namecategory}
                          </option>
                        ))}
                      </select>
                      <input 
                        type="file"
                        placeholder="image"
                        name="image"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <button type="submit">Update product</button>
                    </form>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
