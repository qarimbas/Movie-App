import React from "react";

const MovieDetail = (props) => {
  const actor = props.actorDetails;

  return (
    <div>
      <center>
        <br />
        <div className="mt-2 mb-2 py-16 flex justify-evenly flex-row .. bg-blue-300 text-gray-600">
          <img className="h-64 w-64 mx-10" src={actor.image} />
          <div className="flex-2" />
          <div className="flex flex-col ..">
            <text className="mt-12 flex-1 .. text-2xl ">{actor.summary}</text>
          </div>
        </div>
      </center>
      <div className="flex flex-row justify-evenly">
        <div className="my-2  flex justify-evenly flex-col  text-gray-600 bg-blue-300">
          <div className=" flex justify-center  text-xl font-bold bg-gray-300">
            <text>INFORMATION</text>
          </div>
          <h3 className="flex justify-center  text-xl font-bold">
            Roles: {actor.role}
          </h3>

          <h3 className="flex justify-center  text-xl font-bold">
            Awards: {actor.awards}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Birthdate: {actor.birthDate}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Height: {actor.height}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
