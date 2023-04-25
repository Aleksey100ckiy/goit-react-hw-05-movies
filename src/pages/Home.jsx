
import { FilmList } from "components/FilmList";
import { getFilm } from "services/API";
import { useState, useEffect } from "react";

function Home() {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    getFilm().then(response => response.json())
      .then(filmEl => {
        setFilms((
          [...filmEl.results]));
      })
      .catch(errorEl => {
        console.log('error >>', errorEl);
      })
      .finally(() => {
        console.log('done!');
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return (
    <main>
      <h1>Trendings</h1>
      <FilmList films={films}></FilmList>
    </main>


  );
}

export default Home;

