import axios from "axios";
import { IMDB_Id, IMDBName_Url } from "../constants/imdb.constants";

class NameService {
  async loadName(selected_actor_id) {
    return await axios.get(`${IMDBName_Url}${IMDB_Id}${selected_actor_id}`);
  }
}

export default new NameService();
