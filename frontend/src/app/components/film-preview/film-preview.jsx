import React from 'react';
import './film-preview.scss';
import { Link } from 'react-router-dom';
import { trimReleaseDate } from '../../helpers/trim-release-date';

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
    <div className="film-preview">
      <img className="film-preview__img" src={poster_path} alt={title} />
      <div className="film-preview__description">
        <div className="film-preview__description-title">{title}</div>
        <div className="film-preview__description-year">{trimReleaseDate(release_date)}</div>
        <div className="film-preview__description-genre">{genres.map(genre => ` ${genre}`)}</div>
      </div>
    </div>
  </Link>
);
