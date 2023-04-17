const Movies = () => {
  return (
    <main>
      <h1>Movies</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
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