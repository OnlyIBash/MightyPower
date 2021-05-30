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

function buyStrangeMuscleFluid() {
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