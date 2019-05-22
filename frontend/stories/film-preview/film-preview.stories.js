import React from 'react';
import { storiesOf } from '@storybook/react';
import { FilmPreview } from '../../src/app/components/film-preview/film-preview';
import StoryRouter from 'storybook-react-router';
import { withKnobs, object } from '@storybook/addon-knobs';

const filmPreviewProps = {
  title: 'Movie Title',
  poster_path: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  release_date: '1992',
  genres: ['Action', 'Comedy'],
  id: '123'
};

const areaStyles = {
  position: 'absolute',
  paddingTop: '20px',
  width: '100%',
  height: '100vh',
  paddingLeft: '20px'
};

storiesOf('Film preview', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Default film preview', () => (
    <div style={areaStyles}>
      <FilmPreview filmInfo={object('props', filmPreviewProps)} />
    </div>
  ));
