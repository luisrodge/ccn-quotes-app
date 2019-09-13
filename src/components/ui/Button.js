import styled, { css } from 'styled-components';

export default styled.button`
  padding: 14px 30px;
  letter-spacing: 2px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  font-size: ${props => props.theme.fonts.xs};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.blue};
    box-shadow: 0px 15px 20px rgba(9,132,227, 0.4);
    color: #fff;
  }

  ${props => props.primary && css`
    background: ${props.theme.colors.blue};
    color: #fff;
  `}
`