// Bethany Baril - 03/2025

import React, { useState, useEffect } from 'react';
import { storyData } from './storyData';
import { awardToken, awardItem, playSound, playLoopingMusic } from './utils/gameHelpers';

function StoryEngine() {
  const [pendingRoll, setPendingRoll] = useState(false);
  const [lastRoll, setLastRoll] = useState(null);
  const [currentId, setCurrentId] = useState("start");
  const [tokens, setTokens] = useState([]);
  const [inventory, setInventory] = useState([]);

  const currentScene = storyData.find(scene => scene.id === currentId);

  useEffect(() => {
    if (currentScene?.onEnterToken) {
      setTokens(prev => awardToken(currentScene.onEnterToken, prev));
    }
    if (currentScene?.onEnterItem) {
      setInventory(prev => awardItem(currentScene.onEnterItem, prev));
    }
    if (currentScene?.onEnterSound) {
      playSound(currentScene.onEnterSound);
    }
    if (currentScene?.onEnter === "ROLL_d6" && currentScene.outcomes) {
      setPendingRoll(true);
      setLastRoll(null); // reset last roll
    }
     
  }, [currentScene]);

  const handleChoice = (nextId) => {
    setCurrentId(nextId);
  };

  const [musicAudio, setMusicAudio] = useState(null);

  const handlePlayMusic = () => {
    if (!musicAudio) {
      const audio = playLoopingMusic('music/the-ancient-forest-314814.mp3'); // path inside public/music
      setMusicAudio(audio);
    }
  };
  
  const renderSceneText = (scene) => {
    if (scene.text) {
      return typeof scene.text === "string" ? <p>{scene.text}</p> : scene.text;
    }
  
    // Custom scene text with effects
    if (scene.textId === "fall_with_fx") {
      return (
        <p>
          As you begin down the left path, your foot catches a loose rock—you stumble and{' '}
          <span onClick={() => playSound('sfx/cartoon-slide-whistle-down-2-176648.mp3')} style={{ color: 'cyan', cursor: 'pointer' }}>
            <em>fall!</em>
          </span>{' '}
          Will you land safely… or not?
        </p>
      );
    }
  
    return null;
  };  

  return (
    <div>
      {currentId === "start" && (
        <button onClick={handlePlayMusic} style={{ marginBottom: "10px", backgroundColor: "#94bfc5" }}>
          <span role="img" aria-label="music">🎵</span> Click to Enjoy Music
        </button>

      )}
  
    {pendingRoll && (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => {
        const roll = Math.floor(Math.random() * 6) + 1;
        playSound("sfx/gamemisc_dice-roll-on-wood_jaku5-37414.mp3"); // 🔊 Bonus roll sound!
        setLastRoll(roll);
        setTimeout(() => {
          setPendingRoll(false);
          const nextId = currentScene.outcomes[roll];
          if (nextId) {
            setCurrentId(nextId);
          }
        }, 1500); // short pause to show roll result
      }}>
        <span role="img" aria-label="dice">🎲</span> Roll the Dice
      </button>
      {lastRoll && <p>You rolled a {lastRoll}!</p>}
    </div>
  )}

    {/* To have a clickable text in the storyData.js. Changes from <h2>{currentScene.text}</h2> */}
    <div className="scene-text">
      {renderSceneText(currentScene)}
    </div>


      {/* Show the image if it exists */}
      {currentScene.image && (
        <img 
          src={process.env.PUBLIC_URL + '/' + currentScene.image}
          alt="Scene illustration"
          style={{ maxWidth: "100%", borderRadius: "12px", margin: "20px 0" }}
        />
      )}

      {/* Render choices */}
      {currentScene.choices.map((choice, index) => (
        <button key={index} onClick={() => handleChoice(choice.next)}>
          {choice.text}
        </button>
      ))}

      {/* Debug info or player UI */}
      <div>
        <p><strong>Collected Tokens:</strong> {tokens.join(", ")}</p>
        <p><strong>Inventory:</strong> {inventory.join(", ")}</p>
      </div>
    </div>   
  );
}

export default StoryEngine;
