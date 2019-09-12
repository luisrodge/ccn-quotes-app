import styled from 'styled-components';

export default styled.a`
  color: ${props => props.theme.colors.lightBlue};
  text-decoration: none;
  &:hover, &:focus {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`;