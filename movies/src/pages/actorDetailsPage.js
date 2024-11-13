import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActor";

const ActorDetailsPage = (props) => {
    const { id } = useParams(); 

  // Fetching actor details
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actorDetails", { id }],
    () => getActorDetails(id)
  );

  // Loading state for actor details
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error loading actor details: {error.message}</div>;
  }

  return (
    <>
      {actor ? (
        <PageTemplate actor={actor}>
           
          <ActorDetails actor={actor} />
        </PageTemplate>
      ) : (
        <p>Waiting for actor details...</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
