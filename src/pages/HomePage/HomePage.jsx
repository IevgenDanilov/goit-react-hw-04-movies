// import PostList from "../../client/PostList/PostList";
import PageContainer from "../../shared/containers/PageContainer";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getTrendingMovies } from "../../shared/services/posts";

const HomePage = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
        // throw ("error:", { error });
      }
    };
    fetchMovies();
  }, []);

  const moviesList = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        {title}
      </Link>
    </li>
  ));

  return (
    <PageContainer title={title}>
      <ul>{moviesList}</ul>
    </PageContainer>
  );
};

export default HomePage;
