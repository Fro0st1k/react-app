import React from 'react';
import './film-preview.scss';
import { Link } from "react-router-dom";

function trimReleaseDate(relDate) {
  const yearMonthDay = relDate.split('-');
  return yearMonthDay[0];
}

export const FilmPreview = ({filmInfo: {title, poster_path, release_date, genres, id}}) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className='film-preview'>
        <img className='film-preview__img' src={poster_path} alt={title}/>
        <div className='film-preview__description'>
          <div className='film-preview__description-title'>{title}</div>
          <div className='film-preview__description-year'>{trimReleaseDate(release_date)}</div>
          <div className='film-preview__description-genre'>{genres.map(genre => ` ${genre}`)}</div>
        </div>
      </div>
   </Link>
  )
};
