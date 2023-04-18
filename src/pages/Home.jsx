
import { FilmList } from "components/FilmList";

function Home({ films }) {

  return (
    <main>
      <h1>Trendings</h1>
      <FilmList films={films}></FilmList>
    </main>


  );
}

export default Home;
