import axios from "axios";

class MovieService {
  async loadMovie() {
    return (
      await axios.get(`https://imdb-api.com/en/API/Title/k_hha1j719/tt0110413`),
      console.log("Movie Seervice Js")
    );
  }
}

export default new MovieService();
