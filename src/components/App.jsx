import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout";
import { getFilm } from "services/API";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import('../pages/Movies'))

export const App = () => {

const MakeArrFilms = () => {
   const [arrFilms, setFilms] = useState([]);

  useEffect(() => {
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
  }, [arrFilms]);
}
  MakeArrFilms();


  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home films={MakeArrFilms()} />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
