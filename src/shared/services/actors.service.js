import axios from "axios";
import { IMDB_Id, IMDBFullCast_Url } from "../constants/imdb.constants";

class ActorsService {
  async loadActors(selected_movie_id) {
    return await axios.get(`${IMDBFullCast_Url}${IMDB_Id}${selected_movie_id}`);
  }
}

export default new ActorsService();
