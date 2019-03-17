import React from 'react';
import './film-overview.scss';
import { ContentWrapper } from "../shared/content-wrapper/content-wrapper";

export const FilmOverview = () => {
  return (
    <div className="film-overview">
      <div className='shading'/>
      <ContentWrapper>
        <img src="https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" alt="" className="film-overview__poster"/>
        <div className="film-overview__description">
          <div className="film-overview__title">
            Star Wars: The Last Jedi
            <span className="film-overview__rating">4.7</span>
          </div>
          <div className="film-overview__tagline">The Saga Continues</div>

          <div className="film-overview__stats">
            <div className="film-overview__year">1994</div>
            <div className="film-overview__duration">145 min</div>
          </div>

          <div className="film-overview__story">Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.</div>
        </div>
      </ContentWrapper>
    </div>
  )
};
