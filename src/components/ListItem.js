import styled from 'styled-components';

export default styled.li`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-top: 1px solid #f7f7f7;
  :first-child {
    border-top: none;
  }
`;