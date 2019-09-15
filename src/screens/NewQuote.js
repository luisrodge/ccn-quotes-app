import React, { useContext } from 'react';

import Form from './newQuote/Form';
import { Row } from '../components/ui';
import api from '../utils/api';
import { QuotesContext } from '../QuotesContext';

const NewQuote = ({ history }) => {
  const [state, dispatch] = useContext(QuotesContext);

  const createQuote = (values, setSubmitting) => {
    api
      .post('/quotes', values)
      .then(({ data }) => {
        dispatch({ type: 'CREATE_QUOTE_SUCCESS', quote: data });
        setSubmitting(false);
        history.push(`/quotes/${data.id}`)
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