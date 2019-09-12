import React from 'react';
import styled from 'styled-components';
import { PlusCircle } from 'styled-icons/boxicons-regular';

import List from '../components/List';
import ListItem from '../components/ListItem';

const Header = styled.div`
  padding: 0px ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
`;

const Title = styled.h3`
  flex: 1;
  padding-top: ${props => props.theme.spacing.xs}
`


const NewIcon = styled(PlusCircle)`
  color: ${props => props.theme.colors.blue}
`

const SearchBar = styled.input`
  width: 100%;
  line-height: 33px;
  border: 1px solid #f6f6f6;
  border-radius: 3px;
  padding: 0 2px;
  margin-top: ${props => props.theme.spacing.sm};
`;

const Quotes = () => {
  return (
    <React.Fragment>
      <Header>
        <Title>Quotes (10)</Title>
        <NewIcon size={26} />
      </Header>
      <SearchBar placeholder="Search..." />
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