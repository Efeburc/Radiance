import React, { useState, useEffect } from 'react';
import './ShinyShowcase.css';
import AdminPanel from './AdminPanel'; // Import AdminPanel from its new file

const ShinySprite = React.memo(function ShinySprite({ shiny }) {
  // shiny: { gif: string, type?: string[] }
  const [showSparkle, setShowSparkle] = useState(false);
  const [sparkleKey, setSparkleKey] = useState(0);
  const [gifSize, setGifSize] = useState({ width: 0, height: 0 });

  const handleMouseEnter = () => {
    setShowSparkle(true);
    setSparkleKey(prev => prev + 1);
  };

  const handleAnimationEnd = () => {
    setShowSparkle(false);
  };

  // Attribute overlays
  const isSecret = shiny.type?.includes('secret');
  const isAlpha = shiny.type?.includes('shiny alpha');
  const isSwarm = shiny.type?.includes('swarm');
  const isEgg = shiny.type?.includes('egg');

  // Get gif size for overlay positioning
  const imgRef = React.useRef();
  React.useEffect(() => {
    if (imgRef.current) {
      setGifSize({ width: imgRef.current.naturalWidth, height: imgRef.current.naturalHeight });
    }
  }, [shiny.gif]);

  return (
    <div
      className={`shiny-container${isAlpha ? ' shiny-alpha' : ''}`}
      onMouseEnter={handleMouseEnter}
      style={isAlpha ? { zIndex: 2, position: 'relative' } : {}}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img
          ref={imgRef}
          src={require(`./sprites/shiny/${shiny.gif}`)}
          alt={shiny.gif.replace('.gif', '')}
          className={`shiny-gif${isAlpha ? ' shiny-gif-glow' : ''}`}
          loading="lazy"
        />
        {/* Overlays - now use only CSS for offset */}
        {isSecret && (
          <img src={require('./flair/secret.png')} alt="Secret Shiny" className="shiny-overlay-corner shiny-overlay-secret" loading="lazy" />
        )}
        {isEgg && (
          <img src={require('./flair/egg.png')} alt="Egg Shiny" className="shiny-overlay-corner shiny-overlay-egg" loading="lazy" />
        )}
        {isSwarm && !isEgg && (
          <img src={require('./flair/grass.png')} alt="Swarm Shiny" className="shiny-overlay-corner shiny-overlay-swarm" loading="lazy" />
        )}
        <div
          className={`sparkle-wrapper${showSparkle ? ' animate' : ''}`}
          style={{ opacity: showSparkle ? 1 : 0, position: 'absolute', pointerEvents: 'none', width: '100px', height: '100px', zIndex: 3 }}
          onAnimationEnd={handleAnimationEnd}
        >
          {showSparkle && (
            <img
              key={sparkleKey}
              src={require('./flair/sparkle 2.gif')}
              className="sparkle-effect"
              alt="sparkle effect"
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0 }}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default function ShinyShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Search functionality
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 200);
    return () => clearTimeout(handler);
  }, [search]);
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://radiance-backend-production.up.railway.app/api/users');
      if (!res.ok) throw new Error('Failed to fetch');
      let data = await res.json();
      data = data.sort((a, b) => a.username.localeCompare(b.username));
      setUsers(data);
    } catch (err) {
      setError('Could not load users.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const filteredUsers = users.filter(u => u.username.toLowerCase().includes(debouncedSearch.toLowerCase()));
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
      </header>      <section className="showcase-intro" id="about">
        <p>
          Welcome to the official Team Rädiance Shiny Showcase! Here we display our members' shiny Pokémon achievements.
        </p>
        <div style={{textAlign:'center', margin:'1.5rem 0'}}>
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding:'0.5rem 1rem',
              borderRadius:8,
              border:'1px solid #333',
              background:'#23232b',
              color:'#ffd700',
              fontSize:'1.1rem',
              outline:'none',
              minWidth:220,
              transition: 'background 0.2s, color 0.2s, border 0.2s',
              willChange: 'background, color, border',
            }}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </section>
      <section className="showcase-list" id="showcase">
        {loading ? (
          <div style={{textAlign: 'center', color: '#ffd700', fontSize: '1.2rem', margin: '2rem 0'}}>Loading...</div>
        ) : error ? (
          <div style={{textAlign: 'center', color: '#ff4d4d', fontSize: '1.2rem', margin: '2rem 0'}}>{error}</div>
        ) : (
          filteredUsers.map((player, idx) => (
            <div className="player-section" key={idx}>
              <h2 className="player-heading">
                {player.username} <span className="shiny-count">({player.count} Shinies):</span>
              </h2>
              <hr className="player-divider" />
              <div className="player-shinies">
                {player.shinies.map((shiny, i) => (
                  <ShinySprite key={i} shiny={typeof shiny === 'string' ? { gif: shiny } : shiny} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>
      <section className="shiny-board" id="board">
      </section>
    </div>
  );
}