import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const Cast = lazy(() => import("./pages/MovieDetailsPage/Cast"));
const Reviews = lazy(() => import("./pages/MovieDetailsPage/Reviews"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <Route path="/" exact>
          <HomePage title="Home Page" />
        </Route>
        <Route
          path="/movies"
          render={({ match }) => <MoviesPage title="Movies Page" />}
          exact
        />
        <Route path="/movies/movieId" exact>
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
        <Route path="/movies/:movieId/cast">
          <Cast title="Cast" />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews title="Reviews" />
        </Route>
      </Suspense>
    </Switch>
  );
};

export default Routes;
