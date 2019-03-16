import React from 'react';
import './film-preview.scss';

export const FilmPreview = ({filmInfo: {title, poster_path, release_date, genres}}) => {

  function trimReleaseDate(relDate) {
    const yearMonthDay = relDate.split('-');
    return yearMonthDay[0];
  }

  return (
    <a className='film-preview' href='#'>
      <img className='film-preview__img' src={poster_path} alt={title}/>
      <div className='film-preview__description'>
        <div className='film-preview__description-title'>{title}</div>
        <div className='film-preview__description-year'>{trimReleaseDate(release_date)}</div>
        <div className='film-preview__description-genre'>{genres.map(genre => ` ${genre}`)}</div>
      </div>
    </a>
  )
};
