import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./shared/services/routes";

const HomePage = lazy(() => import("./pages/homePage"));
const MoviesPage = lazy(() => import("./pages/moviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage"));
const NotFound = lazy(() => import("./shared/components/notFound"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <Route
          path={routes.HOME_PAGE}
          exact
          render={() => <HomePage title="Trending today" />}
        />
        <Route path={routes.MOVIES_PAGE} exact render={() => <MoviesPage />} />
        <Route
          path={routes.MOVIE_DATAILS_PAGE}
          render={() => <MovieDetailsPage />}
        />
        <Route path={routes.NOT_FOUND} component={NotFound} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
