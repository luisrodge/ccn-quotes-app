import styled, { css } from 'styled-components';

export default styled.div`
  font-size: ${props => props.theme.fonts.sm};
  ${props => props.md && css`
    font-size: ${props.theme.fonts.md} 
  `};
`;