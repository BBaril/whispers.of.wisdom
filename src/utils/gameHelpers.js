// Bethany Baril - 03/2025

export function rollDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

export function awardToken(tokenName, currentTokens) {
  if (!currentTokens.includes(tokenName)) {
    return [...currentTokens, tokenName];
  }
  return currentTokens;
}

// --- Inventory Helpers ---

// Adds an item if it's not already in the inventory
export function awardItem(itemName, currentInventory) {
  if (!currentInventory.includes(itemName)) {
    return [...currentInventory, itemName];
  }
  return currentInventory;
}

// Checks if an item exists in inventory
export function hasItem(itemName, currentInventory) {
  return currentInventory.includes(itemName);
}

// 🔊 Plays a one-time sound effect (clicks, farts, sparkles)
export function playSound(filename) {
  const audio = new Audio(process.env.PUBLIC_URL + '/' + filename);
  audio.play();
}

// 🔁 Plays a looping background track
export function playLoopingMusic(filename, volume = 0.3) {
  const audio = new Audio(process.env.PUBLIC_URL + '/' + filename);
  audio.loop = true;
  audio.volume = volume;
  audio.play();
  return audio; // return it in case you want to stop or control it later
}
