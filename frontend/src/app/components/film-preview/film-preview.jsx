import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { trimReleaseDate } from '../../helpers/trim-release-date';

const StyledFilmPreview = styled.div`
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

export const FilmPreview = ({
  filmInfo: {
    title,
    poster_path,
    release_date,
    genres,
    id
  }
}) => (
  <Link to={{ pathname: `/film/${id}`, state: { genre: genres[0] } }}>
    <StyledFilmPreview className="film-preview">
      <img className="img" src={poster_path} alt={title} />
      <div className="description">
        <div className="description-title">{title}</div>
        <div className="description-year">{trimReleaseDate(release_date)}</div>
        <div className="description-genre">{genres.map(genre => ` ${genre}`)}</div>
      </div>
    </StyledFilmPreview>
  </Link>
);
