import NavBar from "../components/NavBar/NavBar";
import NOPHOTO from "../assets/no-image.jpg";

function Top250Movies() {
  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Top 250 Movies</h1>

        <div className=" flex justify-center flex-row ..">
          <img className="h-48 w-48" src={NOPHOTO} />
          <div className="flex flex-col ..">
            <text className="mt-10"> Movie Name</text>
            <text className="mt-8">Movie Description</text>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Top250Movies;
