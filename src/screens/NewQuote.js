import React from 'react';
import Form from './newQuote/Form';
import { Row } from '../components/ui';

const NewQuote = () => {
  return (
    <div style={{ padding: "0 40px" }}>
      <Row style={{ marginBottom: "50px" }}>
        <h1>New Quote</h1>
      </Row>
      <Form />
    </div>
  )
}

export default NewQuote;