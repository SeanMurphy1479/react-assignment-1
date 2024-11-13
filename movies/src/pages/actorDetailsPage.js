import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails, getActorMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActor";

const ActorDetailsPage = () => {
    const { id } = useParams(); 

  const { data: actor, Aerror, isALoading, isAError } = useQuery(
    ["actorDetails", { id }],
    () => getActorDetails(id)
  );

  const { data: movies, Merror, isMLoading, isMError } = useQuery(
    ["actorMovies", { id }],
    () => getActorMovies(id)
  );

  if (isALoading || isMLoading) {
    return <Spinner />;
  }

  if (isAError) {
    return <div>Error loading actor details: {Aerror.message}</div>;
  }

  if (isMError) {
    return <div>Error loading actor details: {Merror.message}</div>;
  }

  return (
    <>
      {actor ? (
        <PageTemplate actor={actor}>
          <ActorDetails actor={actor} movies={movies?.cast || []} />
        </PageTemplate>
      ) : (
        <p>Waiting for actor details...</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
