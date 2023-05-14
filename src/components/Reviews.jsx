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
        setReviews(
          [...filmEl.results]);
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
      {/* {console.log(reviews)} */}
      {reviews.map(review => {
        return (<ul key={review.id}>
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p></li>
        </ul>
          )
      })}
    </section>
  );
};

export default Reviews;

 // <ul>
//         <li><h2>{review.author}</h2>
//           <p>{review.content}</p></li>
//       </ul>