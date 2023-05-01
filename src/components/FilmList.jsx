import { Link } from "react-router-dom";
import { Container, CardWrapper, FilmName, Image } from "./FilmList.styled"

export const FilmList = ({ films }) => {
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`${film.id}`}>
            <Image src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} alt="" />
            <FilmName>{(film.title ? film.title : film.name)}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container >
  );
};