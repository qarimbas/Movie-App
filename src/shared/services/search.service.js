import axios from "axios";
import { IMDB_Id, IMDBSearch_Url } from "../constants/imdb.constants";

class SearchService {
  async loadSearch(searchTerm) {
    return await axios.get(`${IMDBSearch_Url}${IMDB_Id}${searchTerm}`);
  }
}

export default new SearchService();
