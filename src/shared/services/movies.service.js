import axios from "axios";
import { IMDBTop250_Url } from "../constants/imdb.constants";

class MoviesService {
  async loadMovies(id) {
    return await axios.get(`${IMDBTop250_Url}${id}`);
  }
}

export default new MoviesService();
