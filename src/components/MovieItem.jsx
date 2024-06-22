import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);

  const { title, backdrop_path, poster_path } = movie;
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 group">
      <img
        className="w-full h-40 sm:h-52 md:h-60 lg:h-80 object-cover rounded-lg transition-transform transform group-hover:scale-95 duration-300 ease-in-out"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
        <p className="whitespace-normal text-xs md:text-sm text-center font-nsans-bold text-white">
          {movie.title}
        </p>
        <p onClick={() => setLike(!like)}>
          {like ? (
            <FaHeart size={20} className="text-gray-300 mt-2" />
          ) : (
            <FaRegHeart size={20} className="text-gray-300 mt-2" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
