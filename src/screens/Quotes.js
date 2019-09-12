import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../utils/theme';
import { Row, Column, List, ListItem, Title } from '../components/ui';

const SearchRow = styled(Row)`
  padding: 0 ${props => props.theme.spacing.sm};
  padding-top: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xs};
`;

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
      <Row paddingX={`${theme.spacing.sm}`}>
        <Column>
          <Title>Quotes</Title>
        </Column>
        <Column width="50px" justify="flex-end">
          <Title>10</Title>
        </Column>
      </Row>
      <Row padding={`${theme.spacing.sm}`}>
        <SearchBar placeholder="Search..." />
      </Row>
      <List>
        <ListItem>
          <Link to="/quotes/2323"><p>Bob Cuzzy</p></Link>
          <small>This is some dummy short text</small>
        </ListItem>
        <ListItem>
          <Link to="/quotes/67443"><p>Bob Cuzzy</p></Link>
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