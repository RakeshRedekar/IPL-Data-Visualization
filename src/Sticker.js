import React, { useState } from "react";
import "./Sticker.css";
import seasonWinners from "./StaticData";
function Sticker() {
  const [stickerStyle, setStyle] = useState({ display: "none" });
  const handleShow = () => {
    setStyle({
      display: `${stickerStyle.display == "block" ? "none" : "block"}`,
    });
  };
  let arr = Object.values(seasonWinners);
  let winnerData = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let k = temp["winnerTeam"];
    if (winnerData[k]) {
      winnerData[k] = winnerData[k] + 1;
    } else {
      winnerData[k] = 1;
    }
  }
  arr = Object.keys(winnerData);

  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("styleTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        console.log("X==", x, "y==", y);
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  return (
    <div className="sticker">
      <h2 onClick={handleShow}>-: Season Leaderboard :-</h2>
      <div style={stickerStyle} className="stickerContaint">
        <div className="OfferDetailImage">
          <button onClick={sortTable}>Sort</button>
        </div>
        <table id="styleTable">
          {arr.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele}</td>
                <td>{winnerData[ele]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Sticker;
