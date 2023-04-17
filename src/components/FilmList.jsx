import { Link } from "react-router-dom";
import {Container, CardWrapper, FilmName } from "./FilmList.styled"

export const FilmList = ({ films }) => {
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`${film.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <FilmName>{film.name}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};