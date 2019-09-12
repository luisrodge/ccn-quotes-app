import styled from 'styled-components';

export default styled.div`
  flex: 1;
  padding-left: ${props => props.theme.spacing.md};
  padding-right: ${props => props.theme.spacing.sm};
  padding-top: ${props => props.theme.spacing.lg};
  padding-bottom: ${props => props.theme.spacing.lg};
`;