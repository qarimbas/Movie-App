import NOPHOTO from "../../assets/no-image.jpg";

function ListItem() {
  return (
    <div
      onClick={(event) => (window.location.href = "/moviedetails")}
      className="mt-2 mb-2 flex justify-center flex-row .. bg-blue-300 text-gray-600 hover:bg-blue-400	"
    >
      <text className="flex-1 mt-16 text-3xl font-bold">1</text>
      <img className="h-48 w-48 mx-10" src={NOPHOTO} />
      <div class="flex-2" />
      <div className="flex flex-col ..">
        <text className="flex-1 .. mt-8 text-xl font-bold">
          The Shawshank Redemption (1994)
        </text>
        <text className="flex-1 .. ">
          Frank Darabont (dir.), Tim Robbins, Morgan Freeman
        </text>
      </div>
      <text className="flex-1 mt-16 text-3xl font-bold ">STAR</text>
    </div>
  );
}

export default ListItem;
