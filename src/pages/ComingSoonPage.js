import NavBar from "../components/NavBar/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comingSoonActions } from "../shared/store/actions/comingsoon.actions";
import { getComingSoonDataSelector } from "../shared/store/selectors/comingsoon.selectors";
import ComingSoonGridView from "../components/MovieDetail/ComingSoonGridView";

function ComingSoonPage() {
  const dispatch = useDispatch();
  const comingSoonData = useSelector(getComingSoonDataSelector);

  useEffect(() => {
    loadComingSoon();
  }, []);

  const loadComingSoon = () => {
    dispatch(comingSoonActions.loadComingSoonAction());
  };

  return (
    <div className="bg-gray-600">
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Coming Soon</h1>
        <br />
        {comingSoonData.length === 0 && (
          <p className="text-blue-500">Loading Movies...</p>
        )}
      </center>
      <br />

      {comingSoonData.length !== 0 && (
        <ComingSoonGridView comingSoon={comingSoonData} />
      )}
    </div>
  );
}

export default ComingSoonPage;
