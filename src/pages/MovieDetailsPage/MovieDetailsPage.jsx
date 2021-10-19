// import { render } from "@testing-library/react";
import {
  useHistory,
  useParams,
  useRouteMatch,
  useLocation,
  Link,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleMovie, getCastMovie } from "../../shared/services/posts";
import { lazy, Suspense } from "react";
import styles from "./MovieDetailsPage1.module.scss";

const Cast = lazy(() => import("../MovieDetailsPage/Cast"));
const Reviews = lazy(() => import("../MovieDetailsPage/Reviews"));

const MovieDetailsPage = () => {
  const history = useHistory();
  const params = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  // console.log(history);
  // console.log(params.movieId);
  // console.log(match);
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const [cast, setCast] = useState();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getSingleMovie(params.movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, []);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <a href="" className={styles.clearLink}>
        ◀ Go back
      </a>
      <section className={styles.mainSection}>
        <img
          src={`${imagePath}${movie?.backdrop_path}`}
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
            {movie?.genres.map(({ name }) => (
              <span>{name} </span>
            ))}
          </p>
        </div>
      </section>
      <hr />
      <section>
        <p>Additional information</p>
        <ul className={styles.list}>
          <li>
            <Link
              to={{
                pathname: `/movies/${params.movieId}/cast`,
                state: { from: location },
              }}
              className={styles.clearLink}
            >
              Casts
            </Link>
          </li>
          <li>
            <Link to="" className={styles.clearLink}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Route path="/movies/:movieId/cast" exact>
          <Cast title="Cast" id={params.movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews" exact>
          <Reviews title="Reviews" />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
