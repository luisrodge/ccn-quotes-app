import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Edit, Trash, LinkExternal } from 'styled-icons/boxicons-regular';

import { Row, Column, Anchor } from '../../components/ui';

const HeaderRow = styled(Row)`
  padding-bottom: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid #f7f7f7;
`;

const Header = ({ quote }) => {
  return (
    <HeaderRow>
      <Column>
        <Anchor secondary href={quote.source} target="blank">
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
    </HeaderRow>
  )
}

Header.propTypes = {
  quote: PropTypes.instanceOf(Object).isRequired,
};

export default Header;