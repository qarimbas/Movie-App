import axios from "axios";
import { IMDB_Id, IMDBTitle_Url } from "../constants/imdb.constants";

class MovieService {
  async loadMovie(selected_movie_id) {
    return await axios.get(`${IMDBTitle_Url}${IMDB_Id}${selected_movie_id}`);
  }
}

export default new MovieService();
