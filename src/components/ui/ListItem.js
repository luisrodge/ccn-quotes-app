import styled from 'styled-components';

export default styled.li`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.sm};
  border-top: 1px solid #74b9ff;
  :first-child {
    border-top: none;
  };
`;