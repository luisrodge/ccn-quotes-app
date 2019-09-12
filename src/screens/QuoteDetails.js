import React from 'react';
import styled from 'styled-components';
import { Plus, Edit, Trash, LinkExternal } from 'styled-icons/boxicons-regular';

import { Row, Column, Anchor } from '../components/ui';

const NewIcon = styled(Plus)`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  padding: ${props => props.theme.spacing.xs};
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
`;

const QuoteWrapper = styled.div`
  position: "relative";
  height: '100%';
`;

const QuoteDetails = () => {
  return (
    <QuoteWrapper>
      <Row padding="0" style={{ borderBottom: '1px solid #f7f7f7', marginBottom: '30px', paddingBottom: '10px' }}>
        <Column>
          <Anchor href="#">
            <LinkExternal size={18} style={{ paddingRight: '5px' }} />

            View author profile
          </Anchor>
        </Column>
        <Column width="170px" justify="flex-end">
          <Anchor secondary href="#">
            <Edit size={18} style={{ paddingRight: '5px' }} />
            Edit
          </Anchor>
          <Anchor secondary href="#" style={{ marginLeft: '20px' }}>
            <Trash size={18} style={{ paddingRight: '5px' }} />
            Delete
          </Anchor>
        </Column>
      </Row>
      <h1>By Lucas Mildton</h1>
      <br /><br />
      <p style={{ lineHeight: '1.7rem' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <NewIcon size={30} />
    </QuoteWrapper>
  )
}

export default QuoteDetails;