const GridView = (props) => {
  const actors = props.actorsData;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Actors</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {actors
            .map((actor) => (
              <a key={actor.id} href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={actor.image}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {actor.asCharacter}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {actor.name}
                </p>
              </a>
            ))
            .slice(0, 5)}
        </div>
      </div>
    </div>
  );
};
export default GridView;
