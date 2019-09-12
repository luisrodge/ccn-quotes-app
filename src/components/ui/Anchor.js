import styled from 'styled-components';

export default styled.a`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.secondary ? props.theme.colors.gray : props.theme.colors.lightBlue};
  text-decoration: none;
  &:hover, &:focus {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`;