import React from 'react';
import styled from 'styled-components';
import { Plus } from 'styled-icons/boxicons-regular';

import { Row, Column, List, ListItem } from '../components/ui';

const HeaderRow = styled(Row)`
  padding: ${props => `0 ${props.theme.spacing.sm}`};
`

const NewIcon = styled(Plus)`
  padding: ${props => props.theme.spacing.xs};
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
`;

const SearchBar = styled.input`
  width: 100%;
  line-height: 33px;
  border: 1px solid #f6f6f6;
  border-radius: 3px;
  padding: 0 2px;
`;

const Quotes = () => {
  return (
    <React.Fragment>
      <HeaderRow>
        <Column>
          <h3>Quotes (10)</h3>
        </Column>
        <Column width="30px">
          <NewIcon size={22} />
        </Column>
      </HeaderRow>
      <Row paddingTop="18px">
        <SearchBar placeholder="Search..." />
      </Row>
      <List>
        <ListItem>
          <p>Bob Cuzzy</p>
          <small>This is some dummy short text</small>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
          <small>This is some dummy short text</small>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
          <small>This is some dummy short text</small>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
          <small>This is some dummy short text</small>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default Quotes;