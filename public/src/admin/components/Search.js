import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = () => {
  return (
    <div className="admin__header__search">
      <InputGroup className="mb-3">
        <Form.Control placeholder="Enter your key" />
        <Button variant="info" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
