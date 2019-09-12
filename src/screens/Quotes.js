import React from 'react';
import styled from 'styled-components';

import { Row, Column, List, ListItem } from '../components/ui';

const HeaderRow = styled(Row)`
  padding: ${props => `0 ${props.theme.spacing.sm}`};
`

const SearchBar = styled.input`
  width: 100%;
  line-height: 33px;
  border: 0;
  border-radius: 3px;
  padding: 0 ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.lightBlue};
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

const Quotes = () => {
  return (
    <React.Fragment>
      <HeaderRow>
        <Column>
          <h2>Quotes</h2>
        </Column>
        <Column width="50px" justify="flex-end">
          <h2>10</h2>
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
        <ListItem>
          <p>Bob Cuzzy</p>
          <small>This is some dummy short text</small>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default Quotes;