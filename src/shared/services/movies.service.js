import axios from "axios";
import {IMDB_Url} from "../constants/imdb.constants";

class MoviesService {
    async loadMovies (id) {
        return await axios.get(`${IMDB_Url}${id}`);
    }
}

export default new MoviesService();
