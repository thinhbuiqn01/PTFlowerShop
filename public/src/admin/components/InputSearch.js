import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const InputSearch = (props) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder={props.placeholder} />
        <Button variant="info" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default InputSearch;
