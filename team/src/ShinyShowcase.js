import React from 'react';
import shinyPlayers from './data/shinies_by_user.json';
import './ShinyShowcase.css';

export default function ShinyShowcase() {
  return (
    <div className="showcase-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://i.imgur.com/0Z2QK0C.png"
            alt="Team Rädiance Logo"
            className="showcase-logo"
          />
          <span>Team Rädiance</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#showcase">Shiny Showcase</a></li>
          <li><a href="#board">Shiny Board</a></li>
        </ul>
      </nav>
      <header className="showcase-banner" id="home">
        <h1>Team Rädiance Shiny Showcase</h1>
      </header>
      <section className="showcase-intro" id="about">
        <p>
          Welcome to the official Team Rädiance Shiny Showcase! Here we display our members' shiny Pokémon achievements.
        </p>
      </section>
      <section className="showcase-list" id="showcase">
        {shinyPlayers.map((player, idx) => (
          <div className="player-section" key={idx}>
            <h2 className="player-heading">
              {player.username} <span className="shiny-count">({player.count} Shinies):</span>
            </h2>
            <div className="player-shinies">
              {player.shinies.map((gif, i) => (
                <img
                  key={i}
                  src={require(`./sprites/shiny/${gif}`)}
                  alt={gif.replace('.gif', '')}
                  className="shiny-gif"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="shiny-board" id="board">
      </section>
    </div>
  );
}