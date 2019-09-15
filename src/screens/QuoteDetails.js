import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Plus } from 'styled-icons/boxicons-regular';
import { Link } from 'react-router-dom';

import { Row } from '../components/ui';
import Header from './quoteDetails/Header';
import Body from './quoteDetails/Body';
import api from '../utils/api';
import { QuotesContext } from '../QuotesContext';

const NewIcon = styled(Plus)`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  padding: ${props => props.theme.spacing.xs};
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;

const QuoteWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const QuoteDetails = ({ history, match }) => {
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


  const deleteQuote = (id) => {
    api
      .del(`/quotes/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_QUOTE_SUCCESS', quoteId: id });
        history.push('/')
      })
      .catch(err => {
      });
  }

  return (
    <QuoteWrapper>
      {!fetchingQuote &&
        quoteError === '' ? (
          <React.Fragment>
            <Header quote={quote} deleteQuote={deleteQuote} />
            <Body quote={quote} />
          </React.Fragment>
        ) : (
          <Row>
            <h2>{quoteError}</h2>
          </Row>
        )
      }
      <Link to="/">
        <NewIcon size={30} />
      </Link>
    </QuoteWrapper>
  )
}

export default QuoteDetails;