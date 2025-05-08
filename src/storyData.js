// Bethany Baril - 03/2025

export const storyData = [
  {
    id: "start",
    text: "Welcome to Whispers of Wisdom. The adventure awaits!",
    image: "images/welcome3.png",
    onEnterSound: "music/the-ancient-forest-314814.mp3",
    choices: [
      { 
        text: "Begin the Journey", 
        next: "scene1" 
      }
    ]
  },
  {
    id: "scene1",
    text: "You are traveling through a quiet forest, following a winding path said to lead to a distant castle. The woods around you are peaceful—until you hear something fast approaching from behind. It's a group of goblins!",
    image: "woods.png",
    choices: [
      { 
        text: "Hide in the trees", 
        next: "hide_in_trees" 
      },
      { 
        text: "Run for the castle", 
        next: "run_to_castle" 
      }
    ]
  },
  {
    id: "hide_in_trees",
    text: "You duck behind thick brush and slip into a narrow opening behind a mossy boulder. Inside, a cool, earthy cave opens before you. Two shadowy paths split off, faintly lit by glowing mushrooms.",
    image: "cave_entrance.png",
    choices: [
      { 
        text: "Take the left path", 
        next: "left_cave_fall_check" 
      },
      { 
        text: "Take the right path", 
        next: "right_cave" 
      }
    ]
  },
  {
    id: "left_cave_fall_check",
    textId: "fall_with_fx",  // tells the engine to render custom sound FX
    image: "falling_cave.png",
    onEnter: "ROLL_d6",
    choices: [],  // empty because the dice roll chooses for you
    outcomes: {
      1: "fall_find_shard",
      2: "fall_find_shard",
      3: "fall_find_shard",
      4: "soft_landing",
      5: "soft_landing",
      6: "soft_landing"
    }
  },
  {
    id: "fall_find_shard",
    text: "You land hard. Pain shoots through your leg — it’s clearly injured. As you sit up, catching your breath, a small stone clatters beside you. It glows faintly with a pulsing light, nestled between the rocks. You reach out...\n\nIt's warm. Familiar, somehow. As your fingers touch it, the light brightens and a soft tone echoes in your ears. The <strong>Echo Shard</strong> has entered your inventory.",
    image: "injured_cave_shard.png",
    onEnterItem: "Echo Shard",
    choices: [
      {
        text: "Try to call out for help...", 
        next: "wizard_rescue"
      }
    ]
  },
  {
    id: "soft_landing",
    text: "You hit the ground hard, but nothing seems broken. As you catch your breath, something strange catches your eye—a soft, glowing light pulsing from the shadows.\n\nDrawn to it, you step closer. The glow intensifies, flickering like it recognizes you. The moment your fingers brush the surface, it bursts into light—*pop!*—and vanishes.\n\nA faint glow now pulses from your pouch. Somehow, the shard is in your possession.",
    image: "echo_shard_discovery.png",
    onEnterItem: "Echo Shard",
    choices: [
      {
        text: "Follow the glowing trail of mushrooms", 
        next: "mushroom_path"
      }
    ]
  },
  {
    id: "mushroom_path",
    text: "The cavern darkens, but the faint glow of mushrooms dotting the walls leads you onward. They shimmer in hues of blue and violet, gently lighting your way like nature’s lanterns.\n\nAs you walk, the path opens into a breathtaking chamber. Crystals shimmer from above, and an underground stream trickles beside your feet. But something stirs deeper in the shadows—was that a whisper?",
    image: "glowing_mushroom_path.png",
    choices: [
      {
        text: "Follow the stream", 
        next: "underground_stream"
      },
      {
        text: "Investigate the whisper", 
        next: "new_character"
      }
    ]
  },
  {
    id: "underground_stream",
    text: "You follow the stream, its gentle sound echoing off the cavern walls. The mushrooms grow thicker here, forming patterns along the ground. Eventually, the passage opens into a chamber filled with stone shelves and towering scroll stacks. A small, fuzzy creature dangles upside-down from a wooden perch—he’s reading a scroll upside-down too.\n\n\"Oh! Visitors! Mind the parchment, it’s older than most mountains,\" he squeaks, adjusting tiny spectacles.",
    image: "bat_librarian.png",
    choices: [
      {
        text: "Approach the bat librarian", 
        next: "bat_librarian"
      }
    ]
  },
  {
    id: "bat_librarian",
    text: "A fuzzy bat swoops down and perches atop a floating stack of books. His glasses are askew, and he straightens them with a wing. 'Ah-ha!' he cries, flapping excitedly. 'A visitor with brain cells! I do so love a thinking creature.'\n\nHe adjusts his tiny bow tie and spins in mid-air. 'Answer me this riddle and I shall bestow upon you something not even the frogs have!'",
    image: "bat_librarian2.png",
    choices: [
      {
        text: "'I am taken from a mine, and shut in a wooden case, from which I am never released, and yet I am used by almost every person.'",
        next: "riddle_1"
      }
    ]
  },
  {
    id: "riddle_1",
    text: "'So? What am I?' he asks, eyes twinkling.",
    choices: [
      {
        text: "A candle", 
        next: "bat_wrong_1"
      },
      {
        text: "Pencil lead", 
        next: "bat_correct"
      },
      {
        text: "A key", 
        next: "bat_wrong_1"
      }
    ]
  },
  {
    id: "bat_wrong_1",
    text: "'Oooh, close—but no sandwich!' he giggles. 'Luckily, I'm in a generous mood. Let's try another!'",
    choices: [
      {
        text: "'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind.'",
        next: "riddle_2"
      }
    ]
  },
  {
    id: "riddle_2",
    text: "He grins upside-down. 'Try again, riddle-rider!'",
    choices: [
      {
        text: "An echo",
        next: "bat_correct"
      },
      {
        text: "A ghost",
        next: "bat_wrong_2"
      },
      {
        text: "A leaf",
        next: "bat_wrong_2"
      }
    ]
  },
  {
    id: "bat_wrong_2",
    text: "'Ohhhh so close again! You’re fun, though, so I’ll give you a hint of wisdom just for trying so hard.'\n\nHe pulls a scroll from nowhere, hands it to you, and winks. 'Try again next time, sparkle-brain.'",
    image: "bat_scroll_hint.png",
    onEnterItem: "Scroll of Echoing Answers",
    choices: [
      {
        text: "Continue",
        next: "tunnel_wander"
      }
    ]
  },
  {
    id: "bat_correct",
    text: "'Yes! YES!' he twirls midair, sending papers flying. 'You glorious riddle muffin!' A glowing stone with an eye symbol appears in your hand. 'It sees because *you* see. Take good care of it!'",
    image: "insight_token.png",
    onEnterToken: "Insight Stone",
    choices: [
      {
        text: "Continue",
        next: "tunnel_wander"
      }
    ]
  },
  {
    id: "tunnel_wander",
    text: "With the riddle echoing in your mind, you follow the soft glowing lichen lining the tunnel walls. The air grows warmer, the sounds more distant, and your footsteps quieter.\n\nThe tunnel gently curves, widening into a quiet chamber where crystals hum with faint energy. Something stirs in the distance — not threatening, but curious.\n\nA voice drifts through the air, playful and unsure: \"...this *is* still the right way, yes?\"",
    image: "glowing_tunnel.png",
    choices: [
      {
        text: "Call out to the voice.",
        next: "meet_wizard"
      },
      {
        text: "Hide and observe quietly.",
        next: "wizard_rescue"
      }
    ]
  },
  
  
  
  
  
  

]  