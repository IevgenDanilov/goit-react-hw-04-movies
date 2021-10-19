import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

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
        <Route path="/movies/:movieId">
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
      </Suspense>
    </Switch>
  );
};

export default Routes;
