import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-basis: 100%;
  flex: ${props => props.width ? `0 0 ${props.width}` : 1};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
`;