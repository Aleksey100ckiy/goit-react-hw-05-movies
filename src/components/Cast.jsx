import {  useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCastMovie } from "services/API";

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    getCastMovie(id).then(response => response.json())
      .then(filmEl => {
        setCasts(
          [...filmEl.cast]);
      })
      .catch(errorEl => {
        console.log('error >>', errorEl);
      })
      .finally(() => {
        console.log('finaly done!');
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section>
      {casts.map(cast => {
        return (
         <ul key={cast.id}>
        <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} weight='200px' />
              <b>{cast.original_name}</b>
              <p>Character: {cast.character} </p>
        </li>
      </ul>)
      })}
      
    </section>
  )
  }

export default Cast;