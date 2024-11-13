import React, { act } from "react";
import Header from "../headerMovieList";


const ActorTemplate = ({ actor, children }) => {
    if (!actor) {
      return <div>Loading actor details...</div>;
    }
  
    return (
        <>
        <Header actor={actor.name} />  
        <h1>{actor.name}</h1>
        <div>{children}</div>
      </>
    );
  };
  
  export default ActorTemplate;