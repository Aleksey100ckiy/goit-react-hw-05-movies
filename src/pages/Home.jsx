import { useState } from "react";
import { getFilm } from "services/API";
import { FilmList } from "components/FilmList";

function Home() {

  const [arrFilms, setFilms] = useState([]);

  const addFilmsToArr = () =>{
  getFilm().then(response => response.json())
            .then(filmEl => {
              setFilms(...filmEl);
            })
            .catch(errorEl => {
              console.log('error >>', errorEl);
            })
            .finally(() => {
              console.log('done!');
            });
  }
  addFilmsToArr();
  
  return (
    <main>
      <h1>Trendings</h1>
      <FilmList films={arrFilms}></FilmList>
    </main>


  );
}

export default Home;
