import React from 'react';
import PropTypes from 'prop-types';

import { Row, Title } from '../../components/ui';

const Body = ({ quote }) => {
  return (
    <React.Fragment>
      <Row marginT="40px">
        <Title md data-cy="author-name">{quote.author}</Title>
      </Row>
      <Row marginT="30px">
        <p style={{ lineHeight: '1.7rem' }}>{quote.body}</p>
      </Row>
    </React.Fragment>
  )
}

Body.propTypes = {
  quote: PropTypes.instanceOf(Object).isRequired,
};

export default Body;