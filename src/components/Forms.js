import React from "react";
import { Button, Form, TextField } from "../styles/SearchForm.styled";

const Forms = ({ inputval, setInputval, searchHere }) => {
  return (
    <Form onSubmit={searchHere}>
      <TextField
        placeholder="Search here"
        type="text"
        value={inputval}
        onChange={(e) => setInputval(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Forms;
