import React from 'react';
import { Header } from '../components/header/header';
import { SubHeader } from '../components/sub-header/sub-header';
import { BodyContent } from '../components/body-content/body-content';
import { SearchResults } from '../components/search-results/search-results';
import { Footer } from '../components/footer/footer';

export const MainPage = () => {
  return (
    <>
      <Header/>
      <SubHeader/>
      <BodyContent>
        <SearchResults/>
      </BodyContent>
      <Footer/>
    </>
  )
};

