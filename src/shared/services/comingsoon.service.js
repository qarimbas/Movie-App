import axios from "axios";
import { IMDB_Id, IMDBComingSoon_Url } from "../constants/imdb.constants";

class ComingSoonService {
  async loadComingSoon() {
    return await axios.get(`${IMDBComingSoon_Url}${IMDB_Id}`);
  }
}

export default new ComingSoonService();
