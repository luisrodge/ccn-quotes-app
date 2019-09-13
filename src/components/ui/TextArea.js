import styled from 'styled-components';

export default styled.textarea`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #E8E8E8;
  border-radius: 0;
  padding: 0 ${props => props.theme.spacing.xs};
  resize: none;
  &:focus{
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.blue};
  }
`;