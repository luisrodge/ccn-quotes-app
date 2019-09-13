import React from 'react';

import { Row, Title } from '../../components/ui';

const Body = ({ quote }) => {
  return (
    <React.Fragment>
      <Row marginT="40px">
        <Title md>{quote.author}</Title>
      </Row>
      <Row marginT="30px">
        <p style={{ lineHeight: '1.7rem' }}>{quote.body}</p>
      </Row>
    </React.Fragment>
  )
}

export default Body;