import React from "react";
import { useSelector } from "react-redux";
import "./player.css";
import store from "./store";
function Player() {
  let selectedYear = useSelector((store) => store.selectedYear);

  let seasonWinners = {
    2008: {
      wiki: "https://en.wikipedia.org/wiki/Shaun_Marsh",
      playerImg: "ShaunMarsh.png",
    },
    2009: {
      wiki: "https://en.wikipedia.org/wiki/Yusuf_Pathan",
      playerImg: "yusuf.png",
    },
    2010: {
      wiki: "https://en.wikipedia.org/wiki/Sachin_Tendulkar",
      playerImg: "sachintendulkar.jpg",
    },
    2011: {
      wiki: "https://en.wikipedia.org/wiki/Chris_Gayle",
      playerImg: "Gayle.jpg",
    },
    2012: {
      wiki: "https://en.wikipedia.org/wiki/Chris_Gayle",
      playerImg: "Gayle.jpg",
    },
    2013: {
      wiki: "https://en.wikipedia.org/wiki/Michael_Hussey",
      playerImg: "hussey.png",
    },
    2014: {
      wiki: "https://en.wikipedia.org/wiki/Glenn_Maxwell",
      playerImg: "Maxwell.jpg",
    },
    2015: {
      wiki: "https://en.wikipedia.org/wiki/David_Warner_(cricketer)",
      playerImg: "Warner.jpg",
    },
    2016: {
      wiki: "https://en.wikipedia.org/wiki/Virat_Kohli",
      playerImg: "Virat.jpg",
    },
    2017: {
      wiki: "https://en.wikipedia.org/wiki/Ben_Stokes",
      playerImg: "Stokes.jpg",
    },
  };
  const { wiki, playerImg } = seasonWinners[selectedYear];
  console.log(wiki, playerImg);
  return (
    <>
      <h3 className="playerH3">
        Man Of The Series <span>(Click on image to see details)</span>{" "}
      </h3>
      <a className="playerLink" href={wiki} target="_blank">
        <img alt="Player Image" src={playerImg} />
      </a>
    </>
  );
}

export default Player;
