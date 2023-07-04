var isGameOn = false;
var xKristina = getXPosition("kristina");
var yKristina = getYPosition("kristina");
var xSpeedKristina = 0;
var ySpeedKristina = 0;
var speedOfKristina = 5;
var isTrue = false;
var kristinaLifeCount = 900;
var enemyLifeCount = 900;
var isGameOver = false;
var collision = false;
var enemyLives = 3;
var kristinaLives = 3;
var gunloaded = true;
var fireballCollision = false;
var enemyLifeCount2 = 1200;
var kristinaLifeCount2 = 900;
var enemyLives2 = 3;
var kristinaLives2 = 3;
var kristinaLifeCount3 = 900;
var enemyLifeCount3 = 1500;
var enemyLives3 = 3;
var kristinaLives3 = 3;
var xpValue1 = 0;
var soundCheck = true;
var arc = 0;
var isJumping = false;
var kristinaBane = 0;
var fireballMoving = false;
var level1 = false;
var level2 = false;
var level3 = false;
hideElement("instructionsTextArea");
hideElement("creditsTextArea");
hideElement("closeAllButton");
//made by partner 
//shows who made the game
onEvent("creditsButton", "click", function( ) {
  showElement("creditsTextArea");
  showElement("closeAllButton");
});
//made by partner 
//shows game instructions
onEvent("instructionButton", "click", function( ) {
  showElement("instructionsTextArea");
  showElement("closeAllButton");
  hideElement("fighterGif");
  hideElement("creditsButton");
  hideElement("startButton");
  hideElement("instructionButton");
});
//made by me
// sets the screen to main game screen with arena
onEvent("startButton", "click", function( ) {
  setScreen("gameSelectorScreen");
  if (soundCheck == true) {
    playSound("Main-Theme---Super-Smash-Bros-Brawl.mp3", false);
  }
});
//made by me
//turns the music on or off
onEvent("soundCheck", "click", function( ) {
  if (soundCheck == true) {
    stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
    soundCheck = false;
  } else {
    playSound("Main-Theme---Super-Smash-Bros-Brawl.mp3", false);
    soundCheck = true;
  }
});
//made by partner 
//closes all extra info pages
onEvent("closeAllButton", "click", function( ) {
  hideElement("creditsTextArea");
  hideElement("instructionsTextArea");
  hideElement("closeAllButton");
  showElement("fighterGif");
  showElement("creditsButton");
  showElement("instructionButton");
  showElement("startButton");
});
//made by me
//resets the game completly 
onEvent("playAgain", "click", function( ) {
  setScreen("instructionScreen");
  stopSound("Shadow-Fight-2-Master-Skills-(3-Act-Survival)-(1)-(1).mp3");
  stopSound("Shadow-Fight-2-Clouds-Heaven-(4-Act-Duel-And-6-Act-Duel)-(1).mp3");
  stopSound("Shadow-Fight-2-Cave-(4-Act-Survival)-(1).mp3");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  stopSound("Smash-melee-ready-go-(mp3cut.net).mp3");
  setPosition("kristina", 10, 275);
  setPosition("kristina2", 10, 275);
  setPosition("kristina3", 5, 285);
  level1 = false;
  level2 = false;
  level3 = false;
  isGameOver = false;
  kristinaLifeCount = 900;
  enemyLifeCount = 900;
  xpValue1 = 0;
  isGameOn = false;
  isTrue = false;
  kristinaLifeCount2 = 900;
  enemyLifeCount2 = 1200;
  kristinaLifeCount3 = 900;
  enemyLifeCount3 = 1500;
  fireballMoving = false;
  setPosition("fireball2", 800, 80);
  setPosition("iceball", 800, 80);
  setPosition("shadowball", 800, 80);
  stopTimedLoop();
});
//made by me
//resets the game completely 
onEvent("playAgain2", "click", function( ) {
  setScreen("instructionScreen");
  stopSound("Shadow-Fight-2-Master-Skills-(3-Act-Survival)-(1)-(1).mp3");
  stopSound("Shadow-Fight-2-Clouds-Heaven-(4-Act-Duel-And-6-Act-Duel)-(1).mp3");
  stopSound("Shadow-Fight-2-Cave-(4-Act-Survival)-(1).mp3");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  stopSound("Smash-melee-ready-go-(mp3cut.net).mp3");
  setPosition("kristina", 10, 275);
  setPosition("kristina2", 10, 275);
  setPosition("kristina3", 5, 285);
  level1 = false;
  level2 = false;
  level3 = false;
  isGameOver = false;
  kristinaLifeCount = 900;
  enemyLifeCount = 900;
  xpValue1 = 0;
  isGameOn = false;
  isTrue = false;
  kristinaLifeCount2 = 900;
  enemyLifeCount2 = 1200;
  kristinaLifeCount3 = 900;
  enemyLifeCount3 = 1500;
  fireballMoving = false;
  setPosition("fireball2", 800, 80);
  setPosition("iceball", 800, 80);
  setPosition("shadowball", 800, 80);
  stopTimedLoop();
});
//made by partner
//resets from stages
onEvent("Reset1", "click", function( ) {
  setScreen("instructionScreen");
  stopSound("Shadow-Fight-2-Master-Skills-(3-Act-Survival)-(1)-(1).mp3");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  stopSound("Smash-melee-ready-go-(mp3cut.net).mp3");
  setPosition("kristina", 10, 275);
  level1 = false;
  level2 = false;
  level3 = false;
  isGameOver = false;
  isTrue = false;
  kristinaLifeCount = 900;
  enemyLifeCount = 900;
  xpValue1 = 0;
  isGameOn = false;
  fireballMoving = false;
  setPosition("fireball2", 800, 80);
  stopTimedLoop();
});
//made by partner
//resets from stages
onEvent("Reset2", "click", function( ) {
  setScreen("instructionScreen");
  stopSound("Shadow-Fight-2-Clouds-Heaven-(4-Act-Duel-And-6-Act-Duel)-(1).mp3");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  stopSound("Smash-melee-ready-go-(mp3cut.net).mp3");
  setPosition("kristina2", 10, 275);
  level1 = false;
  level2 = false;
  level3 = false;
  isGameOver = false;
  isTrue = false;
  kristinaLifeCount2 = 900;
  enemyLifeCount2 = 1200;
  xpValue1 = 0;
  isGameOn = false;
  fireballMoving = false;
  setPosition("iceball", 800, 80);
  stopTimedLoop();
});
//made by partner
//resets from stages
onEvent("Reset3", "click", function( ) {
  setScreen("instructionScreen");
  stopSound("Shadow-Fight-2-Cave-(4-Act-Survival)-(1).mp3");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  stopSound("Smash-melee-ready-go-(mp3cut.net).mp3");
  setPosition("kristina3", 5, 285);
  level1 = false;
  level2 = false;
  level3 = false;
  isGameOver = false;
  isTrue = false;
  kristinaLifeCount3 = 900;
  enemyLifeCount3 = 1500;
  xpValue1 = 0;
  isGameOn = false;
  fireballMoving = false;
  setPosition("shadowball", 800, 80);
  stopTimedLoop();
});
//made by me
// sets the game to use arena 1
onEvent("arena1Image", "click", function( ) {
  livesCheck();
  setText("xp1", "XP: " + xpValue1);
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  playSound("Melee-Menu-Select-Sound.mp3", false);
  if (soundCheck == true) {
    playSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3", false);
  } else {
    stopSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3");
  }
  setScreen("fightScreen1");
  setTimeout(function() {
    setScreen("level1Screen");
    playSound("Smash-melee-ready-go-(mp3cut.net).mp3", false);
  }, 6500);
  setImageURL("readyGo1", "ezgif.com-gif-maker-(15).gif");
  setTimeout(function() {
    setImageURL("readyGo1", "1200px-Blank_button.png");
  }, 10000);
  if (soundCheck == true) {
    setTimeout(function() {
      playSound("Shadow-Fight-2-Master-Skills-(3-Act-Survival)-(1)-(1).mp3", true);
    }, 11000);
  } else {
    stopSound("Shadow-Fight-2-Master-Skills-(3-Act-Survival)-(1)-(1).mp3");
  }
});
//made by me
//sets game to use arena 2
onEvent("arena2Image", "click", function( ) {
  livesCheck();
  setText("xp2", "XP: " + xpValue1);
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  playSound("Melee-Menu-Select-Sound.mp3", false);
  if (soundCheck == true) {
    playSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3", false);
  } else {
    stopSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3");
  }
  setScreen("fightScreen2");
  setTimeout(function() {
    setScreen("level2Screen");
    playSound("Smash-melee-ready-go-(mp3cut.net).mp3", false);
  }, 6500);
  setImageURL("readyGo2", "ezgif.com-gif-maker-(15).gif");
  setTimeout(function() {
    setImageURL("readyGo2", "1200px-Blank_button.png");
  }, 10000);
  if (soundCheck == true) {
    setTimeout(function() {
      playSound("Shadow-Fight-2-Clouds-Heaven-(4-Act-Duel-And-6-Act-Duel)-(1).mp3", true);
    }, 11000);
  } else {
    stopSound("Shadow-Fight-2-Clouds-Heaven-(4-Act-Duel-And-6-Act-Duel)-(1).mp3");
  }
});
//made by partner
//sets the game to use arena 3
onEvent("arena3Image", "click", function( ) {
  livesCheck();
  setText("xp3", "XP: " + xpValue1);
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
  playSound("Melee-Menu-Select-Sound.mp3", false);
  if (soundCheck == true) {
    playSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3", false);
  } else {
    stopSound("Street-Fighter-II-Arcade-Music---Ryu-Stage---CPS1-(mp3cut.net).mp3");
  }
  setScreen("fightScreen3");
  setTimeout(function() {
    setScreen("level3Screen");
    playSound("Smash-melee-ready-go-(mp3cut.net).mp3", false);
  }, 6500);
  setImageURL("readyGo3", "ezgif.com-gif-maker-(15).gif");
  setTimeout(function() {
    setImageURL("readyGo3", "1200px-Blank_button.png");
  }, 10000);
  if (soundCheck == true) {
    setTimeout(function() {
      playSound("Shadow-Fight-2-Cave-(4-Act-Survival)-(1).mp3", true);
    }, 11000);
  } else {
    stopSound("Shadow-Fight-2-Cave-(4-Act-Survival)-(1).mp3");
  }
});
//made by me 
//allows the player to jump if pressing space bar
onEvent("level1Screen", "keydown", function(event ) {
  if (event.keyCode == 32) {
    if (!isJumping) {
      playSound("Swoosh-2-Sound-Effect-(download)-(mp3cut.net).mp3", false);
      arc = 0;
      isJumping = true;
    }
  }
});
//made by me 
//allows the player to jump if pressing space bar
onEvent("level2Screen", "keydown", function(event ) {
  if (event.keyCode == 32) {
    if (!isJumping) {
      playSound("Swoosh-2-Sound-Effect-(download)-(mp3cut.net).mp3", false);
      arc = 0;
      isJumping = true;
    }
  }
});
//made by me 
//allows the player to jump if pressing space bar
onEvent("level3Screen", "keydown", function(event ) {
  if (event.keyCode == 32) {
    if (!isJumping) {
      playSound("Swoosh-2-Sound-Effect-(download)-(mp3cut.net).mp3", false);
      arc = 0;
      isJumping = true;
    }
  }
});
//made by me
//stops the movement when key is lifted
onEvent("level1Screen", "keyup", function(event ) {
  if (event.key=="Left") {
    xSpeedKristina = 0;
  }
  if (event.key=="Right") {
    xSpeedKristina = 0;
  }
});
//made by me
//allows the player to use the commands
onEvent("level1Screen", "keydown", function(event ) {
  if (event.key=="Left") {
    xSpeedKristina = -speedOfKristina;
  }
  if (event.key=="Right") {
    xSpeedKristina = speedOfKristina;
  }
  if (event.key=="p") {
    isGameOn = false;
    stopTimedLoop();
  }
  if (event.key=="e" && !isGameOn) {
    level1 = true;
    fireballCollision = false;
    isGameOn = true;
    startGame();
    xKristina = getXPosition("kristina");
    yKristina = getYPosition("kristina");
  }
  if (event.key == "z") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina");
      yKristina = getYPosition("kristina");
      setImageURL("kristina", "ezgif.com-gif-maker-(8).gif");
      setTimeout(function() {
        setImageURL("kristina", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 600);
      if (event.key == "z" && collision == true && xKristina >= 90 && yKristina >= 180) {
        xpValue1 = xpValue1 + 50;
        setText("xp1", "XP: " + xpValue1);
      }
      if (event.key == "z" && collision == true && xKristina >= 90 && yKristina >= 180) {
        enemyLifeCount = enemyLifeCount - 100;
        livesCheck();
      }
      if (collision == true && xKristina >= 90 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
    }
  }
  if (event.key == "x") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina");
      yKristina = getYPosition("kristina");
      setImageURL("kristina", "ezgif.com-gif-maker-(10).gif");
      setTimeout(function() {
        setImageURL("kristina", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1000);
      if (event.key == "x" && collision == true && xKristina >= 90 && yKristina >= 180) {
        xpValue1 = xpValue1 + 25;
        setText("xp1", "XP: " + xpValue1);
      }
      if (event.key == "x" && collision == true && xKristina >= 90 && yKristina >= 180) {
        enemyLifeCount = enemyLifeCount - 50;
        livesCheck();
      }
      if (collision == true && xKristina >= 90 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        setTimeout(function() {
          playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        }, 500);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        setTimeout(function() {
          playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        }, 400);
      }
    }
  }
  if (event.key == "c") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina");
      yKristina = getYPosition("kristina");
      setImageURL("kristina", "ezgif.com-gif-maker-(13).gif");
      setTimeout(function() {
        setImageURL("kristina", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1290);
      if (collision == true && xKristina >= 90 && yKristina >= 180) {
        playSound("Street-fighter-hard-kick-sound-effect.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
      if (event.key == "c" && collision == true && xKristina >= 90 && yKristina >= 180) {
        xpValue1 = xpValue1 + 75;
        setText("xp1", "XP: " + xpValue1);
      }
      if (event.key == "c" && collision == true && xKristina >= 90 && yKristina >= 180) {
        enemyLifeCount = enemyLifeCount - 150;
        livesCheck();
      }
    }
  }
  if (event.key == "x" || event.key == "z" || event.key == "c") {
    fireballMoving = true;
    fire();
  }
});
//made by partner 
//stops the movement when key is lifted
onEvent("level2Screen", "keyup", function(event) {
  if (event.key=="Left") {
    xSpeedKristina = 0;
  }
  if (event.key=="Right") {
    xSpeedKristina = 0;
  }
});
//made by partner
//allows the player to use controls on level 2
onEvent("level2Screen", "keydown", function(event) {
  if (event.key=="e" && !isGameOn) {
    level2 = true;
    isGameOn = true;
    startGame();
    xKristina = getXPosition("kristina2");
    yKristina = getYPosition("kristina2");
  }
  if (event.key=="Left") {
    xSpeedKristina = -speedOfKristina;
  }
  if (event.key=="Right") {
    xSpeedKristina = speedOfKristina;
  }
  if (event.key=="p") {
    isGameOn = false;
    stopTimedLoop();
  }
  if (event.key == "z") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina2");
      yKristina = getYPosition("kristina2");
      setImageURL("kristina2", "ezgif.com-gif-maker-(8).gif");
      setTimeout(function() {
        setImageURL("kristina2", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 600);
      if (event.key == "z" && collision == true && xKristina >= 75 && yKristina >= 180) {
        xpValue1 = xpValue1 + 50;
        setText("xp2", "XP: " + xpValue1);
      }
      if (event.key == "z" && collision == true && xKristina >= 75 && yKristina >= 180) {
        enemyLifeCount2 = enemyLifeCount2 - 100;
        livesCheck();
      }
      if (collision == true && xKristina >= 75 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
    }
  }
  if (event.key == "x") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina2");
      yKristina = getYPosition("kristina2");
      setImageURL("kristina2", "ezgif.com-gif-maker-(10).gif");
      setTimeout(function() {
        setImageURL("kristina2", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1000);
      if (event.key == "x" && collision == true && xKristina >= 75 && yKristina >= 180) {
        xpValue1 = xpValue1 + 25;
        setText("xp2", "XP: " + xpValue1);
      }
      if (event.key == "x" && collision == true && xKristina >= 75 && yKristina >= 180) {
        enemyLifeCount2 = enemyLifeCount2 - 50;
        livesCheck();
      }
      if (collision == true && xKristina >= 75 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        setTimeout(function() {
          playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        }, 500);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        setTimeout(function() {
          playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        }, 400);
      }
    }
  }
  if (event.key == "c") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina2");
      yKristina = getYPosition("kristina2");
      setImageURL("kristina2", "ezgif.com-gif-maker-(13).gif");
      setTimeout(function() {
        setImageURL("kristina2", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1290);
      if (event.key == "c" && collision == true && xKristina >= 75 && yKristina >= 180) {
        xpValue1 = xpValue1 + 75;
        setText("xp2", "XP: " + xpValue1);
      }
      if (collision == true && xKristina >= 75 && yKristina >= 180) {
        playSound("Street-fighter-hard-kick-sound-effect.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
      if (event.key == "c" && collision == true && xKristina >= 75 && yKristina >= 180) {
        enemyLifeCount2 = enemyLifeCount2 - 150;
        livesCheck();
      }
    }
  }
  if (event.key == "x" || event.key == "z" || event.key == "c") {
    fireballMoving = true;
    fire();
  }
});
//made by partner 
//stops the movement when key is lifted
onEvent("level3Screen", "keyup", function(event) {
  if (event.key=="Left") {
    xSpeedKristina = 0;
  }
  if (event.key=="Right") {
    xSpeedKristina = 0;
  }
});
//made by partner 
//allows the player to use the controls on level 3
onEvent("level3Screen", "keydown", function(event) {
  if (event.key=="e" && !isGameOn) {
    level3 = true;
    isGameOn = true;
    startGame();
    xKristina = getXPosition("kristina3");
    yKristina = getYPosition("kristina3");
  }
  if (event.key=="Left") {
    xSpeedKristina = -speedOfKristina;
  }
  if (event.key=="Right") {
    xSpeedKristina = speedOfKristina;
  }
  if (event.key=="p") {
    isGameOn = false;
    stopTimedLoop();
  }
  if (event.key == "z") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina3");
      yKristina = getYPosition("kristina3");
      setImageURL("kristina3", "ezgif.com-gif-maker-(8).gif");
      setTimeout(function() {
        setImageURL("kristina3", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 600);
      if (event.key == "z" && collision == true && xKristina >= 85 && yKristina >= 180) {
        xpValue1 = xpValue1 + 50;
        setText("xp3", "XP: " + xpValue1);
      }
      if (event.key == "z" && collision == true && xKristina >= 85 && yKristina >= 180) {
        enemyLifeCount3 = enemyLifeCount3 - 100;
        livesCheck();
      }
      if (collision == true && xKristina >= 85 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
    }
  }
  if (event.key == "x") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina3");
      yKristina = getYPosition("kristina3");
      setImageURL("kristina3", "ezgif.com-gif-maker-(10).gif");
      setTimeout(function() {
        setImageURL("kristina3", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1000);
      if (event.key == "x" && collision == true && xKristina >= 85 && yKristina >= 180) {
        xpValue1 = xpValue1 + 25;
        setText("xp3", "XP: " + xpValue1);
      }
      if (event.key == "x" && collision == true && xKristina >= 85 && yKristina >= 180) {
        enemyLifeCount3 = enemyLifeCount3 - 50;
        livesCheck();
      }
      if (collision == true && xKristina >= 85 && yKristina >= 180) {
        playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        setTimeout(function() {
          playSound("Vanoss-Punch-Sound-Effect!.mp3", false);
        }, 500);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        setTimeout(function() {
          playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
        }, 400);
      }
    }
  }
  if (event.key == "c") {
    if (isTrue == false) {
      isTrue = true;
      xKristina = getXPosition("kristina3");
      yKristina = getYPosition("kristina3");
      setImageURL("kristina3", "ezgif.com-gif-maker-(13).gif");
      setTimeout(function() {
        setImageURL("kristina3", "ezgif.com-gif-maker-(9).gif");
        isTrue = false;
      }, 1290);
      if (event.key == "c" && collision == true && xKristina >= 85 && yKristina >= 180) {
        xpValue1 = xpValue1 + 75;
        setText("xp3", "XP: " + xpValue1);
      }
      if (event.key == "c" && collision == true && xKristina >= 85 && yKristina >= 180) {
        enemyLifeCount3 = enemyLifeCount3 - 150;
        livesCheck();
      }
      if (collision == true && xKristina >= 85 && yKristina >= 180) {
        playSound("Street-fighter-hard-kick-sound-effect.mp3", false);
      } else {
        playSound("Swoosh---Sound-Effect-(mp3cut.net).mp3", false);
      }
    }
  }
  if (event.key == "x" || event.key == "z" || event.key == "c") {
    fireballMoving = true;
    fire();
  }
});
//made by partner 
//teaches about attacks
onEvent("battleInfo", "click", function( ) {
  setScreen("infoScreen1");
  stopSound("Main-Theme---Super-Smash-Bros-Brawl.mp3");
});
//made by me
//exits pages
onEvent("backButton", "click", function( ) {
  setScreen("gameSelectorScreen");
  if (soundCheck == true) {
    playSound("Main-Theme---Super-Smash-Bros-Brawl.mp3", false);
  }
});
//made by both 
//incorperates all command variables
function startGame() {
  timedLoop(15, function() {
    updateKristinaPosition();
    checkKristina();
    if (level1 == true) {
      collisionDetection("enemy", true, "kristina");
    }
    if (level2 == true) {
      collisionDetection("octo", true, "kristina2");
    }
    if (level3 == true) {
      collisionDetection("shadow", true, "kristina3");
    }
    if (fireballMoving == true && level1 == true) {
      moveFireball("fireball2");
    }
    if (fireballMoving == true && level2 == true) {
      moveFireball("iceball");
    }
    if (fireballMoving == true && level3 == true) {
      moveFireball("shadowball");
    }
    if (level1 == true) {
      collisionDetectionFireball("fireball2", "kristina");
    }
    if (level2 == true) {
      collisionDetectionFireball("iceball", "kristina2");
    }
    if (level3 == true) {
      collisionDetectionFireball("shadowball", "kristina3");
    }
    
    jump();
    
    if (level1 == true) {
      drawKristina("kristina");
    }
    if (level2 == true) {
      drawKristina("kristina2");
    }
    if (level3 == true) {
      drawKristina("kristina3");
    }
    
  });
}
//made by me 
//allows player to jump using parabolas
function jump() {
  if (isJumping) {
    if (arc >= 610) {
      isJumping = false;
      yKristina = 275;
    } else {
      arc = arc + 15;
      yKristina = 275 - parabola(arc);
    }
  }
}
//made by me 
//allows the jump to be based on parobolic functions
function parabola(jump) {
  return ((-36 * (jump * jump)) / 18605) + ((72 * jump) / 61);
}
//made by me
//keeps track of kristinas x position
function updateKristinaPosition() {
  xKristina = xKristina+xSpeedKristina;
}
//made by me
//checks kristinas borders
function checkKristina() {
  if (xKristina<-15) {
    xKristina = -15;
    xSpeedKristina = 0;
  }
  if (xKristina>240) {
    xKristina = 240;
    xSpeedKristina = 0;
  }
}
//made by partner
//draws our main character
function drawKristina(kristina) {
  setPosition(kristina, xKristina, yKristina);
}
//made by me
//checks the borders for characters
//checks for collision of characters
function collisionDetection(object, isEnemy, person2) {
  var xKristina = getXPosition(person2);
  var yKristina = getYPosition(person2);
  var xEnemy = getXPosition(object);
  var yEnemy = getYPosition(object);
  var kristinaWidth = getProperty(person2, "width");
  var kristinaHeight = getProperty(person2, "height");
  var enemyWidth = getProperty(object, "width");
  var enemyHeight = getProperty(object, "height");
  if (xKristina + kristinaWidth >= xEnemy && xKristina <= xEnemy + enemyWidth) {
    if (yKristina + kristinaHeight >= yEnemy && yKristina <= yEnemy + enemyHeight) {
      collision = true;
      if (isEnemy && !isGameOver && enemyLifeCount <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp1"));
        sound();
        xp1();
      }
      if (isEnemy && !isGameOver && enemyLifeCount2 <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp2"));
        sound();
        xp1();
      }
      if (isEnemy && !isGameOver && enemyLifeCount3 <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp3"));
        sound();
        xp1();
      }
    }
  }
}
//made by both
//checks for the reloads and allows to fire if loaded
//resets variables
function fire() {
  if (kristinaLifeCount >= 300) {
    setTimeout(function() {
      playSound("Swoosh-3-Sound-Effect-(download).mp3", false);
    }, 200);}
  if (gunloaded) {
    kristinaBane = 0;
    gunloaded = false;
    setPosition("fireball2", 800, 80);
  }
  if (kristinaLifeCount2 >= 300) {
    setTimeout(function() {
      playSound("Swoosh-3-Sound-Effect-(download).mp3", false);
    }, 200);}
  if (gunloaded) {
    kristinaBane = 0;
    gunloaded = false;
    setPosition("iceball", 800, 80);
  }
  if (kristinaLifeCount3 >= 300) {
    setTimeout(function() {
      playSound("Swoosh-3-Sound-Effect-(download).mp3", false);
    }, 200);}
  if (gunloaded) {
    kristinaBane = 0;
    gunloaded = false;
    setPosition("shadowball", 800, 80);
  }
}
//made by partner
//moves the fireball in a fluid animation
//checks its position
function moveFireball(ballObject) {
  var fireballX = getXPosition(ballObject);
  var fireballY = getYPosition(ballObject);
  kristinaBane = kristinaBane + 2;
  fireballY = 80 + kristinaBane;
  fireballX = 800 + fireballMove(kristinaBane);
  setPosition(ballObject, fireballX, fireballY);
  if (fireballX < -5) {
    gunloaded = true;
    fireballMoving = false;
    setPosition(ballObject, 800, 80);
  }
}
//made by partner
//creating fireball parabola
function fireballMove(fernando) {
  return ((-fernando * fernando) / 175 - 200);
}
//made by partner
//checks if the firball is coming in contact with kristina
//resets fireball position
//updates the lives and xp
function collisionDetectionFireball(ball, person) {
  var fireballX = getXPosition(ball);
  var fireballY = getYPosition(ball);
  var xKristina = getXPosition(person);
  var yKristina = getYPosition(person);
  var fireballWidth = getProperty(ball, "width");
  var fireballHeight = getProperty(ball, "height");
  var kristinaWidth = getProperty(person, "height") - 116;
  var kristinaHeight = getProperty(person, "height");
  if (fireballX + fireballWidth >= xKristina && fireballX <= (xKristina + kristinaWidth)) {
    if (fireballY + fireballHeight >= yKristina && fireballY <= yKristina + kristinaHeight) {
      setPosition("fireball2", 800, 80);
      setPosition("iceball", 800, 80);
      setPosition("shadowball", 800, 80);
      gunloaded = true;
      fireballMoving = false;
      fireballCollision = true;
      kristinaLifeCount = kristinaLifeCount - 300;
      kristinaLifeCount2 = kristinaLifeCount2 - 300;
      kristinaLifeCount3 = kristinaLifeCount3 - 300;
      livesCheck();
      if (!isGameOver && kristinaLifeCount <= 0) {
        setScreen("loseScreen");
        setText("totalXpLose", "Total XP: " + xpValue1);
        xp1();
        isGameOver = true;
        playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
      }
      if (!isGameOver && kristinaLifeCount2 <= 0) {
        setScreen("loseScreen");
        setText("totalXpLose", "Total XP: " + xpValue1);
        xp1();
        isGameOver = true;
        playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
      }
      if (!isGameOver && kristinaLifeCount3 <= 0) {
        setScreen("loseScreen");
        setText("totalXpLose", "Total XP: " + xpValue1);
        xp1();
        isGameOver = true;
        playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
      }
      if (fireballCollision == true && kristinaLifeCount >= 0) {
        playSound("Concrete-impact-bullet.mp3", false);
      }
      if (fireballCollision == true && kristinaLifeCount2 >= 0) {
        playSound("Concrete-impact-bullet.mp3", false);
      }
    }
  }
}
//made by both
//updates the xp levels
function xp1() {
  if (xpValue1 >= 700) {
    setText("xpRank", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank", "XP Skill level: Novice");
  }
  if (xpValue1 >= 700) {
    setText("xpRank2", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank2", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank2", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank2", "XP Skill level: Novice");
  }
}
//made by partner 
//updates the lives for the characters
//deals with damage
function livesCheck() {
  if (kristinaLifeCount == 900) {
    kristinaLives = 3;
    setText("livesKristina1", "Lives: " + kristinaLives);
  }
  if (kristinaLifeCount <= 600) {
    kristinaLives = 2;
    setText("livesKristina1", "Lives: " + kristinaLives);
  }
  if (kristinaLifeCount <= 300) {
    kristinaLives = 1;
    setText("livesKristina1", "Lives: " + kristinaLives);
  }
  if (enemyLifeCount == 900) {
    enemyLives = 3;
    setText("livesEnemy1", "Lives: " + enemyLives);
  }
  if (enemyLifeCount <= 600) {
    enemyLives = 2;
    setText("livesEnemy1", "Lives: " + enemyLives);
  }
  if (enemyLifeCount <= 300) {
    enemyLives = 1;
    setText("livesEnemy1", "Lives: " + enemyLives);
  }
  if (kristinaLifeCount3 == 900) {
    kristinaLives3 = 3;
    setText("livesKristina3", "Lives: " + kristinaLives3);
  }
  if (kristinaLifeCount3 <= 600) {
    kristinaLives3 = 2;
    setText("livesKristina3", "Lives: " + kristinaLives3);
  }
  if (kristinaLifeCount3 <= 300) {
    kristinaLives3 = 1;
    setText("livesKristina3", "Lives: " + kristinaLives3);
  }
  if (enemyLifeCount3 == 1500) {
    enemyLives3 = 3;
    setText("livesEnemy3", "Lives: " + enemyLives3);
  }
  if (enemyLifeCount3 <= 1000) {
    enemyLives3 = 2;
    setText("livesEnemy3", "Lives: " + enemyLives3);
  }
  if (enemyLifeCount3 <= 500) {
    enemyLives3 = 1;
    setText("livesEnemy3", "Lives: " + enemyLives3);
  }
  if (kristinaLifeCount2 == 900) {
    kristinaLives2 = 3;
    setText("livesKristina2", "Lives: " + kristinaLives2);
  }
  if (kristinaLifeCount2 <= 600) {
    kristinaLives2 = 2;
    setText("livesKristina2", "Lives: " + kristinaLives2);
  }
  if (kristinaLifeCount2 <= 300) {
    kristinaLives2 = 1;
    setText("livesKristina2", "Lives: " + kristinaLives2);
  }
  if (enemyLifeCount2 == 1200) {
    enemyLives2 = 3;
    setText("livesEnemy2", "Lives: " + enemyLives2);
  }
  if (enemyLifeCount2 <= 800) {
    enemyLives2 = 2;
    setText("livesEnemy2", "Lives: " + enemyLives2);
  }
  if (enemyLifeCount2 <= 400) {
    enemyLives2 = 1;
    setText("livesEnemy2", "Lives: " + enemyLives2);
  }
}
//made by me
//checks the borders for characters
//checks for collision of characters
function collisionDetection(object, isEnemy, person2) {
  var xKristina = getXPosition(person2);
  var yKristina = getYPosition(person2);
  var xEnemy = getXPosition(object);
  var yEnemy = getYPosition(object);
  var kristinaWidth = getProperty(person2, "width");
  var kristinaHeight = getProperty(person2, "height");
  var enemyWidth = getProperty(object, "width");
  var enemyHeight = getProperty(object, "height");
  if (xKristina + kristinaWidth >= xEnemy && xKristina <= xEnemy + enemyWidth) {
    if (yKristina + kristinaHeight >= yEnemy && yKristina <= yEnemy + enemyHeight) {
      collision = true;
      if (isEnemy && !isGameOver && enemyLifeCount <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp1"));
        sound();
        xp2();
      }
      if (isEnemy && !isGameOver && enemyLifeCount2 <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp2"));
        sound();
        xp2();
      }
      if (isEnemy && !isGameOver && enemyLifeCount3 <= 0) {
        isGameOver = true;
        setScreen("winScreen");
        setText("totalXpWin", "Total " + getText("xp3"));
        sound();
        xp2();
      }
    }
  }
}
//made by me
//plays the proper sounds for functions
function sound() {
  if (kristinaLifeCount == 900) {
    playSound("Perfect-(Street-Fighter)-Sound-Effect-(1).mp3", false);
  }
  if (kristinaLifeCount < 900) {
    playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
  }
  if (kristinaLifeCount2 == 900) {
    playSound("Perfect-(Street-Fighter)-Sound-Effect-(1).mp3", false);
  }
  if (kristinaLifeCount2 < 900) {
    playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
  }
  if (kristinaLifeCount3 == 900) {
    playSound("Perfect-(Street-Fighter)-Sound-Effect-(1).mp3", false);
  }
  if (kristinaLifeCount3 < 900) {
    playSound("Smash-bros-GAME-sound-effect-(1).mp3", false);
  }
}
//made by me
//updates the xp levels for collision detection
function xp2() {
  if (xpValue1 >= 700) {
    setText("xpRank", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank", "XP Skill level: Novice");
  }
  if (xpValue1 >= 700) {
    setText("xpRank2", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank2", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank2", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank2", "XP Skill level: Novice");
  }
}
//made by partner
//manages xp in fireball collision
function xp1() {
  if (xpValue1 >= 700) {
    setText("xpRank", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank", "XP Skill level: Novice");
  }
  if (xpValue1 >= 700) {
    setText("xpRank2", "XP Skill level: GODLY");
  }
  if (xpValue1 <= 700) {
    setText("xpRank2", "XP Skill level: Expert");
  }
  if (xpValue1 <= 500) {
    setText("xpRank2", "XP Skill level: Intermediate");
  }
  if (xpValue1 <= 300) {
    setText("xpRank2", "XP Skill level: Novice");
  }
}
