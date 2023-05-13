import {  useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsMovie } from "services/API";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  // const path  = useLocation();

    useEffect(() => {
    getReviewsMovie(id).then(response => response.json())
      .then(filmEl => {
        setReviews((
          {...filmEl}));
      })
      .catch(errorEl => {
        console.log('error >>', errorEl);
      })
      .finally(() => {
        console.log('finaly done!');
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {console.log(reviews)}
      {/* {reviews.results.map(result => (<ul>
        <li><h2>{result.author}</h2>
          <p>{result.content}</p></li>
      </ul>))} */}
      <div>
        <h2>Author: 4.6/5</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem harum
          architecto sapiente corporis, voluptatem quas voluptatibus fugiat
          
        </p>
      </div>
      <div>
        <h2>Second review - 4.8/5</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nihil ea, eaque fugit amet possimus officiis asperiores aperiam facere
          et?
        </p>
      </div>
    </section>
  );
};

export default Reviews;