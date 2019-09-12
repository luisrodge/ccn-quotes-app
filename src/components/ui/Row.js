import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${props => props.padding ? props.padding : props.theme.spacing.sm};
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0}
`;