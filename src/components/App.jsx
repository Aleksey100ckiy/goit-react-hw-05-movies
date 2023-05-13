import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout";


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import('../pages/Movies'));
const FilmDetails = lazy(()=> import('../pages/FilmDetails') )
const Reviews = lazy(()=> import ('../components/Reviews'))
const Cast = lazy(()=> import ('../components/Cast'))

export const App = () => {

  return (
    <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home  />} />
        <Route path="/movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
        </Route>
      </Route>
    </Routes>

    </div>
    
  );
};
