import styled from 'styled-components';
import { Link } from 'react-router-dom';

import spacing from './spacing';

import Content from './Content';
import Row from './Row';
import Column from './Column';
import List from './List';
import ListItem from './ListItem';
import Anchor from './Anchor';
import Title from './Title';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const Text = styled.p`
  color: ${props => props.color || '#4d4d4d'};
  ${spacing};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.secondary ? props.theme.colors.gray : props.theme.colors.lightBlue};
  color: ${props =>
    props.secondary && props.theme.colors.gray ||
    props.primary && props.theme.colors.blue ||
    '#fff'
  };
  text-decoration: none;
  &:hover, &:focus {
    text-decoration: none;
    color: ${props =>
    props.secondary && props.theme.colors.gray ||
    props.primary && props.theme.colors.blue ||
    '#fff'
  };
  }
`;

export {
  Content,
  Row,
  Column,
  List,
  ListItem,
  Anchor,
  Title,
  Input,
  TextArea,
  Button,
  Text,
  Label,
  StyledLink
}