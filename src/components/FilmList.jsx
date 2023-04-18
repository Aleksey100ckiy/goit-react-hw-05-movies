import { Link } from "react-router-dom";
import { Container, CardWrapper, FilmName } from "./FilmList.styled"

export const FilmList = ({ films }) => {
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`${film.id}`}>
            <img src={`${film.poster_path}`} alt="" />
            <FilmName>{film.title}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container >
  );
};