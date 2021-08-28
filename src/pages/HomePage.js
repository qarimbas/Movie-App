import NavBar from "../components/NavBar/NavBar";
import GridView from "../components/GridView";

function HomePage() {
  const axios = require("axios");

  try {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_hha1j719")
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <NavBar />
      <GridView />
    </div>
  );
}

export default HomePage;
