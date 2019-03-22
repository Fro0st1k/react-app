import React from 'react';
import './film-overview.scss';
import { ContentWrapper } from "../shared/content-wrapper/content-wrapper";

export const FilmOverview = ({filmInfo: {title, poster_path, runtime, overview, tagline}}) => {
  return (
    <div className="film-overview">
      <div className='shading'/>
      <ContentWrapper>
        <img src={poster_path} alt="" className="film-overview__poster"/>
        <div className="film-overview__description">
          <div className="film-overview__title">
            {title}
            <span className="film-overview__rating">4.7</span>
          </div>
          <div className="film-overview__tagline">{tagline}</div>

          <div className="film-overview__stats">
            <div className="film-overview__year">1994</div>
            <div className="film-overview__duration">{runtime}</div>
          </div>

          <div className="film-overview__story">{overview}</div>
        </div>
      </ContentWrapper>
    </div>
  )
};
