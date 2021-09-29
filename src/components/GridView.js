import { useState } from "react";

const GridView = (props) => {
  const actors = props.actorsData;
  const [gridViewNumber, setGridViewNumber] = useState(8);
  const [showLess, setShowLess] = useState(true);

  const showMoreHandler = () => {
    setGridViewNumber(actors.length);
    setShowLess(false);
  };

  const showLessHandler = () => {
    setGridViewNumber(8);
    setShowLess(true);
  };

  return (
    <div className="bg-gray-700">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Actors</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {actors
            .map((actor) => (
              <a
                key={actor.id}
                onClick={(event) => (
                  (window.location.href = `/actordetails/${actor.id}`),
                  console.log(actor.id + " selected")
                )}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={actor.image}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-blue-300">
                  {actor.asCharacter}
                </h3>
                <p className="mt-1 text-lg font-medium text-blue-300">
                  {actor.name}
                </p>
              </a>
            ))
            .slice(0, gridViewNumber)}
        </div>
        {showLess && (
          <button
            className="bg-gray-600 text-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2"
            onClick={showMoreHandler}
          >
            Show More
          </button>
        )}
        {!showLess && (
          <button
            className="bg-gray-600 text-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2"
            onClick={showLessHandler}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};
export default GridView;
