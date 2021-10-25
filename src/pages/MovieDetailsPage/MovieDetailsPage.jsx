import {
  useHistory,
  useParams,
  useLocation,
  Link,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleMovie } from "../../shared/services/api";
import { lazy, Suspense } from "react";
import { routes } from "../../shared/services/routes";
import Loader from "react-loader-spinner";
import styles from "./MovieDetailsPage.module.scss";

const Cast = lazy(() => import("./cast"));
const Reviews = lazy(() => import("./reviews"));

const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getSingleMovie(params.movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, []);

  const handleBack = () => {
    if (location?.state?.from) {
      const prevLocation = location.state.from;
      history.push(prevLocation);
    } else {
      history.push(routes.HOME_PAGE);
    }
  };

  return (
    <>
      <button type="button" className={styles.btn} onClick={handleBack}>
        ◀ Go back
      </button>
      <section className={styles.mainSection}>
        <img
          src={movie && `${imagePath}${movie?.backdrop_path}`}
          alt=""
          className={styles.mainImage}
        />
        <div>
          <h1>{movie?.title}</h1>
          <p>User score: {[movie?.vote_average * 10]}%</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h4>Genres</h4>

          <p>
            {movie?.genres.map(({ id, name }) => (
              <span key={id}>{name} </span>
            ))}
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h4>Additional information</h4>
        <ul className={styles.list}>
          <li>
            <Link
              to={{
                pathname: `/movies/${params.movieId}/cast`,
                state: { from: location?.state.from },
              }}
              className={styles.clearLink}
            >
              Casts
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${params.movieId}/reviews`,
                state: { from: location?.state.from },
              }}
              className={styles.clearLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <Suspense
        fallback={
          <Loader
            className="Loader"
            type="TailSpin"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={0}
          />
        }
      >
        <Route
          path={`${routes.MOVIE_DATAILS_PAGE}/cast`}
          exact
          render={() => <Cast title="Cast" id={params.movieId} />}
        />
        <Route
          path={`${routes.MOVIE_DATAILS_PAGE}/reviews`}
          exact
          render={() => <Reviews title="Reviews" id={params.movieId} />}
        />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
