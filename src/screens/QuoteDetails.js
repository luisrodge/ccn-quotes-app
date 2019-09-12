import React from 'react';
import styled from 'styled-components';
import { Plus } from 'styled-icons/boxicons-regular';

const NewIcon = styled(Plus)`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  padding: ${props => props.theme.spacing.xs};
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 40px;
  z-index: 999;
  pointer: cursor;
`;

const QuoteDetails = () => {
  return (
    <div style={{ position: "relative", height: '100%' }} >
      <h2>By Lucas Mildton</h2>
      <br /><br />
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <br /><br />
      <p><a href="#">View author profile</a></p>
      <NewIcon size={30} />
    </div>
  )
}

export default QuoteDetails;