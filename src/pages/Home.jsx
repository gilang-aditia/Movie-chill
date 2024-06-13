import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title="Continue watching the film" url={endpoints.popular} />
      <MovieRow
        title="top Today's Top Rating Films and Series"
        url={endpoints.topRated}
      />
      <MovieRow title="Trending Movies" url={endpoints.trending} />
      <MovieRow title="New Release" url={endpoints.popular} />
    </>
  );
};

export default Home;
