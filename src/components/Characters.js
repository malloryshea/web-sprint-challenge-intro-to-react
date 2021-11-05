// Write your Character component here
import React from 'react'
import "./Characters.css";
import "./Character.js";

function Characters(props) {
  return (
    <>
      {props.users.map(user => (
          <Character user = {user} key = {user.results.title}/>
      )) }
    </>

    /*<div className="character-list">
      <div className="character-list__name">
        <h2>characterName</h2>
        <div className="character-list__number">characterNumber</div>
      </div>
    </div>*/
  );
}

export default Characters; 