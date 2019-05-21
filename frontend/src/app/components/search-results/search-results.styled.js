import styled from 'styled-components';

export const SearchResultsEmpty = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export const SearchResultsWithData = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 240px);
`;
