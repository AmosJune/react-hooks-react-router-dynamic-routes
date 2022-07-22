import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  // call useParams to access the `params` from the url
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie and display it */}
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;


// useRouteMatch is used to retrieve the URL of the current page
// and
// useParams allows us to access the value of any parameters we're using in our routes.