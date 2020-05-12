import React, { useState } from "react";
import styles from "./Organiser.module.scss";
import allData from "./football-team.data.json";

// ## Football Team Organiser
// Using the data set provided, build a component to allow users to select players from the list -
// - and create their ideal Borussia Mönchengladbach starting eleven.

// * A user can’t insert a player more than once.
// * A team can have no more than 1 Goalkeeper
// * The starting eleven needs to include 3 Defenders, 4 Midfielders, 3 Attackers.

const Organiser = () => {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);

  return (
    <>
      {allData.map((data) => (
        <div key={data.id} className={styles.border}>
          <h3>{data.name}</h3>
          <p>{data.nationality}</p>
          <p>{data.position}</p>
          <button onClick={() => {
            setPlayer(data.name)
          }}>Add Player</button>
        </div>
      ))}
      <div className={styles.borderTwo}>
        <h3>{player}</h3>
        <p>text</p>
        <p>text</p>
      </div>
    </>
  );
};

export default Organiser;
