import React from 'react';
import { Link } from 'react-router-dom';
import { trimReleaseDate } from '../../helpers/trim-release-date';
import { StyledFilmPreview } from './film-preview.styled';

export const FilmPreview = ({ filmInfo }) => {
  const {
    title,
    poster_path,
    release_date,
    genres,
    id
  } = filmInfo;
  return (
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
};
