import { useSearchParams } from "react-router-dom";

import { FilmList } from "../components/FilmList";
import { SearchBox } from "../components/";
import { getFilms } from "API";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const films = getFilms();
    const FilmName = searchParams.get("name") ?? "";


    const visibleFilms = films.filter((film) =>
    film.name.toLowerCase().includes(FilmName.toLowerCase())
  );

    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
    return (
        <main>
            <SearchBox value={FilmName} onChange={updateQueryString} />
            <FilmList films={visibleFilms} />
        </main>
    )
}

export default Movies;