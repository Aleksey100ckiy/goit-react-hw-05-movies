import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home  from "../pages/Home"
import Movies from "../pages/Movies"
import { Container, Header, Link} from "./App.styled";


export const App = () => {
  return (
    <Container>
      <Header>
        <Link to="/home" end>
            Home
        </Link>
          <Link to="/movies ">Movies</Link>
      </Header>
      <Outlet />
    </Container>
  );
};
