import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import logo from "../../assets/images/logo.jpg";
import Search from "./Search";

const Header = () => {
  return (
    <Row className="admin__header">
      <Col xs={3}>
        <img className="logo" src={logo} alt="logo" />
      </Col>
      <Col xs={6}>
            <Search />
      </Col>
      <Col xs={3} className="admin__header__account">
        <span>
          <DropdownButton id="dropdown-basic-button" title="Admin">
            <Dropdown.Item>
              <Link to="/admin/login">Login</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/admin/login">Logout</Link>
            </Dropdown.Item>
          </DropdownButton>
        </span>
      </Col>
    </Row>
  );
};

export default Header;
