import React from 'react';
import './film-overview.scss';
import { trimReleaseDate } from '../../helpers/trim-release-date';

export const FilmOverview = ({filmInfo: {title, poster_path, runtime, overview, tagline, release_date, vote_average}}) => {
  return (
    <div className="film-overview">
      <img src={poster_path} alt="" className="film-overview__poster"/>
      <div className="film-overview__description">
        <div className="film-overview__title">
          {title}
          <span className="film-overview__rating">{vote_average}</span>
        </div>
        <div className="film-overview__tagline">{tagline}</div>

        <div className="film-overview__stats">
          <div className="film-overview__year">{trimReleaseDate(release_date)}</div>
          <div className="film-overview__duration">{runtime} min</div>
        </div>

        <div className="film-overview__story">{overview}</div>
      </div>
    </div>
  )
};
