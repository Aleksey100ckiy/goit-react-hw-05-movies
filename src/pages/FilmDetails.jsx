import {  useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getFilmById } from "services/API";
// import { getFilm } from "services/API";
import { getMovieById } from "services/API";


const FilmDetails = () => {

  // const [films, setFilms] = useState([]);
  const [film, setFilm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(response => response.json())
      .then(filmEl => {
        setFilm((
          { ...filmEl }));
      })
      .catch(errorEl => {
        console.log('error >>', errorEl);
      })
      .finally(() => {
        console.log('finaly done!');
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   useEffect(() => {
//     setFilm(getFilmById(films, id));
//     //eslint-disable-next-line react-hooks/exhaustive-deps
// }, [films]);
  
  
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    return (
        <main>
        <BackLink to={backLinkHref}>Go back!</BackLink>
        {/* {(film !== 0) ? <p>{(film ? console.log(film, id)  : console.log(('Empty')))}</p>  : null} */}    
        <ul>
          <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} haight='400' alt="{(film.title ? film.title : film.name)}" />
          <h2>{(film.title ? film.title : film.name)}({film.release_date
          })</h2>
          <p>{film.vote_average}%</p>
        </ul>
        <li>
          <h3>Overview</h3>
          <p>{ film.overview}</p>
        </li>
        <li>
          <h4>Genres</h4>
          <p>{}</p>
        </li>
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