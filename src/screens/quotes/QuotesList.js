import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { List, ListItem, StyledLink } from '../../components/ui';

const BodyPreview = styled.small`
  font-family: ${props => props.theme.fonts.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.grayAlt};
`;

const QuotesList = ({ quotes }) => {
  return (
    <List>
      {quotes.map(quote => (
        <ListItem key={quote.id}>
          <StyledLink to={`/quotes/${quote.id}`}>
            <p>{quote.author}</p>
          </StyledLink>
          <BodyPreview>
            {quote.body}
          </BodyPreview>
        </ListItem>
      ))}
    </List>
  )
}

QuotesList.propTypes = {
  quotes: PropTypes.instanceOf(Array).isRequired,
};

export default QuotesList;