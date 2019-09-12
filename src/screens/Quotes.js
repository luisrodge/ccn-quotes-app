import React from 'react';
import styled from 'styled-components';

import List from '../components/List';
import ListItem from '../components/ListItem';


const Header = styled.div`
  padding: 0px ${props => props.theme.spacing.sm};
`;

const Quotes = () => {
  return (
    <React.Fragment>
      <Header>
        <h4>Quotes (10)</h4>
      </Header>
      <List>
        <ListItem>
          <p>Bob Cuzzy</p>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
        </ListItem>
        <ListItem>
          <p>Bob Cuzzy</p>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default Quotes;