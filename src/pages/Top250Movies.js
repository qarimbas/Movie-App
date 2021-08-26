import NavBar from "../components/NavBar/NavBar";
import ListItem from "../components/ListItem/ListItem";

function Top250Movies() {
  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Top 250 Movies</h1>

        <div className="my-5 py-3 flex justify-center flex-row  bg-blue-300">
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RANK</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">TITLE</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RATE</h3>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </center>
    </div>
  );
}

export default Top250Movies;
