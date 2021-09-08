import axios from "axios";

class ActorsService {
  async loadActors(selected_movie_id) {
    console.log("actorsService of ", selected_movie_id);
    return await axios.get(
      `https://imdb-api.com/API/FullCast/k_hha1j719/${selected_movie_id}`
    );
  }
}

export default new ActorsService();
