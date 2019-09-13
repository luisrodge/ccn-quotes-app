import React, { useContext } from 'react';

import Form from './newQuote/Form';
import { Row } from '../components/ui';
import api from '../utils/api';
import { QuotesContext } from '../QuotesContext';


const NewQuote = (values, setSubmitting) => {
  const [state, dispatch] = useContext(QuotesContext);

  const createQuote = () => {
    api
      .post('/quotes', values)
      .then(res => {
        dispatch({ type: 'CREATE_QUOTE_SUCCESS', quote: res });
        setSubmitting(false);
      })
      .catch(err => {
        dispatch({ type: 'CREATE_QUOTE_FAILURE' });
        setSubmitting(false); setSubmitting(false);
      });
  }

  return (
    <div style={{ padding: "0 40px" }}>
      <Row style={{ marginBottom: "50px" }}>
        <h1>New Quote</h1>
      </Row>
      <Form createQuote={createQuote} />
    </div>
  )
}

export default NewQuote;