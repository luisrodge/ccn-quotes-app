import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${props => props.width ? `0 0 ${props.width}` : 1};
`;