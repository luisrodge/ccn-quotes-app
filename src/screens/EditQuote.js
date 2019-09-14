import React, { useContext } from 'react';

import Form from './editQuote/Form';
import { Row } from '../components/ui';
import api from '../utils/api';
import { QuotesContext } from '../QuotesContext';

const EditQuote = ({ history }) => {
  const [state, dispatch] = useContext(QuotesContext);

  const updateQuote = (values, setSubmitting) => {
    api
      .post('/quotes', values)
      .then(res => {
        dispatch({ type: 'CREATE_QUOTE_SUCCESS', quote: res });
        setSubmitting(false);
        history.push(`/quotes/${res.id}`)
      })
      .catch(err => {
        dispatch({ type: 'CREATE_QUOTE_FAILURE' });
        setSubmitting(false); setSubmitting(false);
      });
  }

  return (
    <div style={{ padding: "0 40px" }}>
      <Row style={{ marginBottom: "50px" }}>
        <h1>Edit Quote</h1>
      </Row>
      <Form updateQuote={updateQuote} />
    </div>
  )
}

export default EditQuote;