import axios from "axios";

class MovieService {
  async loadMovie(selected_movie_id) {
    console.log("lo", selected_movie_id);
    return await axios.get(
      `https://imdb-api.com/en/API/Title/k_hha1j719/${selected_movie_id}`
    );
  }
}

export default new MovieService();
