import styled from 'styled-components';

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
  Label
}