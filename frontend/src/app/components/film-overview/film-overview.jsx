import React from 'react';
import { trimReleaseDate } from '../../helpers/trim-release-date';
import { StyledFilmOverview, StyledFilmOverviewLoading } from './film-overview.styled';

export const FilmOverview = ({ filmInfo, isLoading }) => {
  const {
    title,
    poster_path,
    runtime,
    overview,
    tagline,
    release_date,
    vote_average
  } = filmInfo;
  return (!isLoading
    ? (
      <StyledFilmOverview className="film-overview">
        <img src={poster_path} alt={title} className="poster" />
        <div className="description">
          <div className="header">
            <span className="title">{title}</span>
            <span className="rating">{vote_average}</span>
          </div>
          {tagline ? <div className="tagline">{tagline}</div> : null}

          <div className="stats">
            <div className="year">{trimReleaseDate(release_date)}</div>
            <div className="duration">{`${runtime} min`}</div>
          </div>

          <div className="story">{overview}</div>
        </div>
      </StyledFilmOverview>
    )
    : (
      <StyledFilmOverviewLoading className="film-overview-loading">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={null} alt={null} className="poster loading-bg" />
        <div className="description">
          <div className="header">
            <span className="title loading-bg" />
            <span className="rating loading-bg" />
          </div>
          <div className="tagline loading-bg" />

          <div className="stats">
            <div className="year loading-bg" />
            <div className="duration loading-bg" />
          </div>

          <div className="story">
            <div className="story-string story-string--first loading-bg" />
            <div className="story-string story-string--second loading-bg" />
            <div className="story-string story-string--third loading-bg" />
            <div className="story-string story-string--last loading-bg" />
          </div>
        </div>
      </StyledFilmOverviewLoading>
    )
  );
};
