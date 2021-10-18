import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import styles from "./MovieDetailsPage1.module.scss";

export default render(
  <>
    <a href="" className={styles.clearLink}>
      ◀ Go back
    </a>
    <section className={styles.mainSection}>
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className={styles.mainImage}
      />
      <div>
        <h1>Title</h1>
        <p>User score: </p>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt
          sequi minima veniam vel ducimus dolores dolore cum illo, aliquam nam
          facere iure itaque error! Repellendus debitis tempore illum fugiat.
        </p>
        <h4>Genres</h4>
        <p>Lorem ipsum dolor</p>
      </div>
    </section>
    <hr />
    <section>
      <p>Additional information</p>
      <ul className={styles.list}>
        <li>
          <a href="" className={styles.clearLink}>
            Casts
          </a>
        </li>
        <li>
          <a href="" className={styles.clearLink}>
            Reviews
          </a>
        </li>
      </ul>
    </section>
    <hr />
  </>
);
