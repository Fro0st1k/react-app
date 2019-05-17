import React from 'react';
import './film-overview.scss';
import { trimReleaseDate } from '../../helpers/trim-release-date';

export const FilmOverview = ({
  filmInfo: {
    title,
    poster_path,
    runtime,
    overview,
    tagline,
    release_date,
    vote_average
  }, isLoading
}) => (!isLoading
  ? (
    <div className="film-overview">
      <img src={poster_path} alt={title} className="film-overview__poster" />
      <div className="film-overview__description">
        <div className="film-overview__header">
          <span className="film-overview__title">{title}</span>
          <span className="film-overview__rating">{vote_average}</span>
        </div>
        {tagline ? <div className="film-overview__tagline">{tagline}</div> : null}

        <div className="film-overview__stats">
          <div className="film-overview__year">{trimReleaseDate(release_date)}</div>
          <div className="film-overview__duration">{`${runtime} min`}</div>
        </div>

        <div className="film-overview__story">{overview}</div>
      </div>
    </div>
  )
  : (
    <div className="film-overview">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={null} alt={null} className="film-overview__poster loading-bg" />
      <div className="film-overview__description">
        <div className="film-overview__header">
          <span className="film-overview__title loading-bg" />
          <span className="film-overview__rating loading-bg" />
        </div>
        <div className="film-overview__tagline loading-bg" />

        <div className="film-overview__stats">
          <div className="film-overview__year loading-bg" />
          <div className="film-overview__duration loading-bg" />
        </div>

        <div className="film-overview__story">
          <div className="film-overview__story-string film-overview__story-string--first loading-bg" />
          <div className="film-overview__story-string film-overview__story-string--second loading-bg" />
          <div className="film-overview__story-string film-overview__story-string--third loading-bg" />
          <div className="film-overview__story-string film-overview__story-string--last loading-bg" />
        </div>
      </div>
    </div>
  )
);
