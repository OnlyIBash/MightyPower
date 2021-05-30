
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
    document.getElementById("indexSite").classList.add("active");
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
    document.getElementById("indexSite").classList.remove("active","highlight");
    document.getElementById("upgradesSite").classList.remove("active","highlight");
    document.getElementById("prestigeSite").classList.remove("active","highlight");

    document.getElementById("gameView").classList.add("hidden");
    document.getElementById("upgradesView").classList.add("hidden");
    document.getElementById("prestigeView").classList.add("hidden"); 
  }

function setHighlightUpgrades() {
    document.getElementById("upgradesSite").classList.add("highlight");
  }


function getPower() {
    gameData.power += gameData.powerPerClick;
    document.getElementById("powerGot").innerHTML = gameData.power + " Power got";
    document.getElementById("showPowerPerClick").innerHTML = gameData.powerPerClick + " Power gained per Click";
    
    genericUpgrade1(gameData.power);
    genericUpgrade2(gameData.power);

  }

function buyPowerPerClick() {
    if (gameData.power >= gameData.powerPerClickCost) {
      gameData.power -= gameData.powerPerClickCost;
      gameData.powerPerClick += 1;
      gameData.powerPerClickCost *= 2;
      document.getElementById("powerGot").innerHTML = gameData.power + " Power Got";
      document.getElementById("perClickUpgrade").innerHTML = "Strength the muscles (Currently Level " + gameData.powerPerClick + ") Cost: " + gameData.powerPerClickCost + " Power";
      document.getElementById("showPowerPerClick").innerHTML = gameData.powerPerClick + " Power gained per Click";
    }
  }

function buySrangeMuscleFluid() {
    if(gameData.power >= gameData.strangeFluidCost) {
    gameData.power -= gameData.strangeFluidCost;
    gameData.powerPerClick += gameData.strangeFluidBonus;
    gameData.strangeFluidBonus += 2;
    gameData.strangeFluidCost = Math.ceil(gameData.strangeFluidCost * 2.5);
    document.getElementById("powerGot").innerHTML = gameData.power + " Power Got";
    document.getElementById("strangeFluidUpgrade").innerHTML = "Buy a strange muscle fluid (Currently Level " + gameData.powerPerClick + ") Cost: " + gameData.strangeFluidCost + " Power";
    document.getElementById("showPowerPerClick").innerHTML = gameData.powerPerClick + " Power gained per Click";
    }
  }

/*
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("MightyPowerSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("MightyPowerSave"))
    if (savegame !== null) {
    gameData = savegame
}
*/