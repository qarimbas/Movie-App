import axios from "axios";
import { IMDB_Id, IMDBInTheaters_Url } from "../constants/imdb.constants";

class InTheatersService {
  async loadInTheaters() {
    return await axios.get(`${IMDBInTheaters_Url}${IMDB_Id}`);
  }
}

export default new InTheatersService();
