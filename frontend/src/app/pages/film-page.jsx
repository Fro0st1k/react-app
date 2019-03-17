import React from 'react';
import { SubHeader } from "../components/sub-header/sub-header";
import { BodyContent } from "../components/body-content/body-content";
import { SearchResults } from "../components/search-results/search-results";
import { FilmOverview } from "../components/film-overview/film-overview";
import { Footer } from "../components/footer/footer";

export const FilmPage = () => {
  return (
    <>
      <FilmOverview/>
      <SubHeader/>
      <BodyContent>
        <SearchResults/>
      </BodyContent>
      <Footer/>
    </>
  )
};
