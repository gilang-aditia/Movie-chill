import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className="relative">
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>

      <div className="relative flex items-center">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 z-10 bg-gray-800 text-white px-2 py-1 rounded-full m-2">
          {"<"}
        </button>

        <div
          id="slider"
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="absolute right-0 z-10 bg-gray-800 text-white px-2 py-1 rounded-full m-2">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
