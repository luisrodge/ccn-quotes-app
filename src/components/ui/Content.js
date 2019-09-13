import styled from 'styled-components';

export default styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  overflow-y: scroll;
`;