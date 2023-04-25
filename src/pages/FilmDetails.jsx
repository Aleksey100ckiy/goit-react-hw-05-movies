import {  useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getFilmById } from "services/API";
import { getFilm } from "services/API";


const FilmDetails = () => { 

  const [films, setFilms] = useState([]);

  const { id } = useParams();


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
        console.log('finaly done!');
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    return (
        <main>
        <BackLink to={backLinkHref}>Back to products</BackLink>
        {(films !== 0) ? <p>{(films ? console.log(films.map(film=> film), id)  : films)}</p>  : null}
    
        <ul>
          <h4>Additional information</h4>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
    )
}

export default FilmDetails;


/* <div>
          <ul>
            <li><h2>Name { `${(film.title ? film.title : film.name)}`}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p></li>
            <li>
              <h3>Overview</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p></li>
            <li><h3>Genres</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p></li>
          </ul>
        
        </div> */