import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: inherit;
  flex-direction: ${props => (props.direction ? props.direction : 'unset')};
`;
