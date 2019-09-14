import React, { useContext, useEffect } from 'react';

import Form from './editQuote/Form';
import { Row } from '../components/ui';
import api from '../utils/api';
import { QuotesContext } from '../QuotesContext';

const EditQuote = ({ history, match }) => {
  const [state, dispatch] = useContext(QuotesContext);

  const { quotes, fetchingQuote, quoteError, quote } = state;

  const quoteId = match.params.id;
  const quoteObj = quotes.find(quote => quote.id == quoteId);

  useEffect(() => {
    if (quoteObj) {
      dispatch({ type: 'GET_QUOTE_SUCCESS', quote: quoteObj });
      return;
    }
    api
      .get(`/quotes/${quoteId}`)
      .then(res => {
        dispatch({ type: 'GET_QUOTE_SUCCESS', quote: res });
      })
      .catch(err => {
        console.log("Sdsdsd")
        dispatch({ type: 'GET_QUOTE_FAILURE' });
      });
  }, [dispatch, quoteId, quoteObj]);

  const updateQuote = (values, setSubmitting) => {
    api
      .put(`/quotes/${quote.id}`, values)
      .then(res => {
        dispatch({ type: 'UPDATE_QUOTE_SUCCESS', quote: res });
        setSubmitting(false);
        history.push(`/quotes/${res.id}`)
      })
      .catch(err => {
        setSubmitting(false); setSubmitting(false);
      });
  }

  return (
    <div style={{ padding: "0 40px" }}>
      {!fetchingQuote &&
        quoteError === '' ? (
          <React.Fragment>
            <Row style={{ marginBottom: "50px" }}>
              <h1>Edit Quote</h1>
            </Row>
            <Form updateQuote={updateQuote} quote={quote} />
          </React.Fragment>
        ) : (
          <Row>
            <h2>{quoteError}</h2>
          </Row>
        )
      }

    </div>
  )
}

export default EditQuote;