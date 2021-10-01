import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import ListItem from "../components/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../shared/store/actions/movies.actions";
import { IMDB_Id } from "../shared/constants/imdb.constants";
import { getMoviesDataSelector } from "../shared/store/selectors/movies.selectors";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Top250Movies = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector(getMoviesDataSelector);

  React.useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    dispatch(moviesActions.loadMoviesAction(IMDB_Id));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * 25;
  const indexOfFirstPost = indexOfLastPost - 25;

  const paginateFront = () => {
    if (currentPage !== 10) {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginateBack = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-700">
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Top 250 Movies</h1>
        <div className="my-5 py-3 flex justify-center flex-row  bg-gray-600">
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RANK</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">TITLE</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RATE</h3>
        </div>
        {moviesData.length === 0 && (
          <p className="text-blue-500 font-bold text-2xl">Loading...</p>
        )}
        {moviesData
          .map((item, index) => {
            return <ListItem key={index} moviedata={item} />;
          })
          .slice(indexOfFirstPost, indexOfLastPost)}
        <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 ">
          <div className="flex-1 flex justify-between sm:hidden">
            <a
              onClick={() => {
                paginateBack();
              }}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              onClick={() => {
                paginateFront();
              }}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-blue-500">
                Showing{" "}
                <span className="font-medium">{indexOfFirstPost + 1}</span> to{" "}
                <span className="font-medium">{indexOfLastPost}</span> of{" "}
                <span className="font-medium">250</span> results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  onClick={() => {
                    paginateBack();
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                <a
                  onClick={() => {
                    paginate(1);
                  }}
                  aria-current="page"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  onClick={() => {
                    paginate(2);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(3);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(4);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  4
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(5);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  5
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(6);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  6
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(7);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  7
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(8);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  8
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(9);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  9
                </a>
                <a
                  onClick={() => {
                    setCurrentPage(10);
                  }}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  10
                </a>
                <a
                  onClick={() => {
                    paginateFront();
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Top250Movies;
