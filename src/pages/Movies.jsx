import { SearchBox } from "../components/SearchBox";
import { FilmList } from "components/FilmList";
// import { getMovieById } from "services/API"; 
import { searchMovie } from "services/API";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleMovies, setVisibleMovies] = useState([])
  const searchFilms = searchParams.get("name") ?? "";
  
 
  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  
  const onClick = () => {
    
    searchMovie(searchFilms).then(response => response.json())
      .then(filmEl => {
        setMovies((
          [...filmEl.results]));
      })
      .catch(errorEl => {
        console.log('error >>', errorEl);
      })
      .finally(() => {
        console.log('done!');
      });
  };
  
  

 
useEffect(() => {
  setVisibleMovies(movies.filter((movie) =>
    (movie.title ? movie.title : movie.name).toLowerCase().includes(searchFilms.toLowerCase()))
  );
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, [movies]);

  return (
    <main>
      <h1>Movies</h1>
      <SearchBox value={searchFilms} onChange={updateQueryString}></SearchBox>
      <button onClick={onClick} type="Button" className='Button'>Load more</button>
      <FilmList films={ visibleMovies }></FilmList>
    </main>
  );
};

export default Movies;



// import { useSearchParams } from "react-router-dom";

// import { FilmList } from "../components/FilmList";
// import { SearchBox } from "../components/";
// import { getFilms } from "../API";

// const Movies = () => {
//     const films = getFilms();

//     const [searchParams, setSearchParams] = useSearchParams();
    
//     const FilmName = searchParams.get("name") ?? "";


//     const visibleFilms = films.filter((film) =>
//     film.name.toLowerCase().includes(FilmName.toLowerCase())
//   );

//     const updateQueryString = (name) => {
//     const nextParams = name !== "" ? { name } : {};
//     setSearchParams(nextParams);
//   };
//     return (
//         <main>
//             <SearchBox value={FilmName} onChange={updateQueryString} />
//             <FilmList films={visibleFilms} />
//         </main>
//     )
// }

// export default Movies;