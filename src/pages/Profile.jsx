import React, { useEffect, useState, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const sliderRef = useRef(null);

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

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

  const handleUnlikeShow = async (movie) => {
    const userDoc = doc(db, "users", user.email);

    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };

  if (!user) {
    return (
      <>
        <p>Fetching Shows...</p>
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold text-white">
              My Favorite Movies
            </h1>
            <p className="font-nsans-light text-white text-sm">{user.email}</p>
          </div>
        </div>
        {/* movie row */}

        <h2 className="font-nsans-bold md:text-xl p-4 capitalize">Fav Shows</h2>
        <div className="relative flex items-center mt-64">
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
              <div
                key={movie.id}
                className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 group">
                <img
                  className="w-full h-40 sm:h-52 md:h-60 lg:h-80 object-cover rounded-lg transition-transform transform group-hover:scale-95 duration-300 ease-in-out"
                  src={createImageUrl(
                    movie.backdrop_path ?? movie.poster_path,
                    "w500"
                  )}
                  alt={movie.title}
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
                  <p className="whitespace-normal text-xs md:text-sm text-center font-nsans-bold text-white">
                    {movie.title}
                  </p>

                  <p>
                    <AiOutlineClose
                      size={30}
                      onClick={() => handleUnlikeShow(movie)}
                      className="absolute top-4 right-4"
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNextClick}
            className="absolute right-0 z-10 bg-gray-800 text-white px-2 py-1 rounded-full m-2">
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
