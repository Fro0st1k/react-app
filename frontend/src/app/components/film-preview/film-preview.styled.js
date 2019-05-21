import styled from 'styled-components';

export const StyledFilmPreview = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  width: 240px;
  color: black;

  .img {
    height: 340px;
    width: 240px;
    background-color: ${props => props.theme.blockColors.imgPlaceholderColor};
  }

  .description {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
    padding: 5px;
  }

  .description-title {
    font-size: 16px;
    max-width: 180px;
    height: 35px;
    margin-top: 6px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .description-year {
    border: 1px solid ${props => props.theme.blockColors.borderColor};
    border-radius: 2px;
    position: absolute;
    right: 5px;
    top: 10px;
    padding: 2px 5px 1px;
    user-select: none;
  }

  .description-genre {
    color: ${props => props.theme.fontColors.silverFontColor};
  }
`;
