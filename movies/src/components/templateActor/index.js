import React, { act } from "react";
import Header from "../headerMovie";



const ActorTemplate = ({ actor, children }) => {
    if (!actor) {
      return <div>Loading actor details...</div>;
    }
  
    return (
        <>
        <Header actor={actor} />  
        <div>{children}</div>
      </>
    );
  };
  
  export default ActorTemplate;