
var gameData = {
  power: 0,
  powerPerClick: 1,
  powerPerClickCost: 10,
  strangeFluidCost: 30,
  strangeFluidBonus: 2,
  Update: 0
}

function onClickGame() {
  hideAll();
  document.getElementById("gameSite").classList.add("active");
  document.getElementById("gameView").classList.remove("hidden");
}

function onClickUpgrades() {
  hideAll();
  document.getElementById("upgradesSite").classList.add("active");
  document.getElementById("upgradesView").classList.remove("hidden");
}

function onClickPrestige() {
  hideAll();
  document.getElementById("prestigeSite").classList.add("active");
  document.getElementById("prestigeView").classList.remove("hidden");
}

function hideAll(){
    document.getElementById("gameSite").classList.remove("active","highlight");
    document.getElementById("upgradesSite").classList.remove("active","highlight");
    document.getElementById("prestigeSite").classList.remove("active","highlight");

    document.getElementById("gameView").classList.add("hidden");
    document.getElementById("upgradesView").classList.add("hidden");
    document.getElementById("prestigeView").classList.add("hidden"); 
  }

function setHighlightUpgrades() {
  document.getElementById("upgradesSite").classList.add("highlight");
}

function setHighlightGame() {
  document.getElementById("gameSite").classList.add("highlight");
}

function getPower() {
  gameData.power += gameData.powerPerClick;
  document.getElementById("powerGot").innerHTML = gameData.power + " Power got";
  document.getElementById("showPowerPerClick").innerHTML = gameData.powerPerClick + " Power gained per Click";   
  genericUpgrade1(gameData.power);
  genericUpgrade2(gameData.power);
  automatedUpdates(gameData.power);
}




var mainGameLoop = window.setInterval(function() {
  
}, 1000)


/*
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("MightyPowerSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("MightyPowerSave"))
    if (savegame !== null) {
    gameData = savegame
}
*/