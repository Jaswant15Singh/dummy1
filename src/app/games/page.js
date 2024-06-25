import React from "react";
import "../../app/style.css";
import Link from "next/link";
import DeleteGames from "../DeleteGames";


const getGames = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  return data;
};

const page = async () => {
  let game = await getGames();
  let games = game.result;
  console.log(games);
  return (
    <div className="games_class">
      <h1>List Of All The Games</h1>
      <table border={4}>
        <thead>
          <tr>
            <th>Game name</th>
            <th>price</th>
            <th>company</th>
            <th>category</th>
            <th>Changes</th>
          </tr>
        </thead>

        <tbody>
          {games.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td>
                <Link href={`/games/${item._id}`}>Update</Link>
              <DeleteGames id={item._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link style={{ marginTop: "20px" }} href={"/"}>
        <strong>Go to Home Page</strong>
      </Link>

      <Link style={{ marginTop: "20px" }} href={"/addgame"}>
        <strong>Add games</strong>
      </Link>
    </div>
  );
};

export default page;
