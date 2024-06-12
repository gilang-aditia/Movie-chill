import React, { useEffect, useState } from "react";
// import Background from "../assets/img/bg1.png";
import { FaVolumeMute } from "react-icons/fa";
import axios from "axios";
import endpoints, { createImageUrl } from "../services/movieServices";
const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);

  const truncate = (str, length) => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  if (!movie)
    return (
      <>
        <p>fetching movie......</p>
      </>
    );

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-t from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />
        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <p className="text-gray-300 mt-2">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[55%] mt-4 text-gray-200">
            {truncate(overview, 800)}
          </p>
          <div className="mt-6 mb-4 flex gap-4 items-center justify-between">
            <div className="flex gap-4">
              <button className="capitalize bg-blue-700 text-white py-2 px-5 rounded-lg">
                Play
              </button>
              <button className="capitalize border border-gray-300 py-1 px-5 rounded-lg">
                Watch Trailer
              </button>
              <button className="capitalize border border-gray-300 py-2 px-1 rounded-full">
                18 +
              </button>
            </div>
            <button className="border border-gray-300 py-2 px-1 rounded-full flex items-center">
              <FaVolumeMute className="w-8 h-6 px-1 py-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
