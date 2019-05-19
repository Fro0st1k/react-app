import React from 'react';
import styled, { keyframes } from 'styled-components';
import { trimReleaseDate } from '../../helpers/trim-release-date';

const StyledFilmOverview = styled.div`
  position: relative;
  display: flex;
  color: ${props => props.theme.fontColors.mainFontColor};

  .poster {
    display: block;
    min-width: 240px;
    height: 340px;
    background-color: rgb(198, 194, 195);
    margin: 20px;
    border-radius: 2px;
  }

  .description {
    margin: 20px;
    padding: 30px 0;
    width: 100%;
  }

  .header {
    font-size: 26px;
    font-weight: 500;
    color: ${props => props.theme.fontColors.contrastFontColor};
    display: flex;
    align-items: center;
  }

  .title {
    height: 28px;
    min-width: 90px;
  }

  .rating {
    display: inline-block;
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding: 1px 5px;
    border: 1px solid ${props => props.theme.blockColors.mainContrastColor};
    border-radius: 2px;
    margin-left: 20px;
    height: 20px;
    min-width: 26px;
  }

  .stats {
    display: flex;
    margin-top: 20px;
  }

  .tagline {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;
    min-width: 300px;
    height: 20px;
  }

  .year {
    margin-right: 30px;
    min-width: 36px;
    height: 16px;
  }

  .duration {
    min-width: 50px;
    height: 16px;
  }

  .story {
    margin: 15px 0 5px;
    font-size: 16px;
  }
`;

const loadingAnimation = keyframes`
  0%{
    background-position: -100% 0
  }

  50% {
    background-position: 100% 0
  }

  100%{
    background-position: 230% 0
  }
`;

const StyledFilmOverviewLoading = styled(StyledFilmOverview)`
  .story-string {
    height: 14px;
    width: 100%;
    margin-bottom: 5px;

    &--first {
      width: 79%;
    }
    
    &--secont {
      width: 90%;
    }
    
    &--third {
      width: 85%;
    }
    
    &--last {
      width: 52%;
    }
  }

  .loading-bg {
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${loadingAnimation};
    animation-timing-function: ease-in-out;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
    border: none;
    padding: 0;
    border-radius: 2px;
  }
`;

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
