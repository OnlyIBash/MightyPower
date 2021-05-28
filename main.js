var gameData = {
    power: 0,
    powerPerClick: 1,
    powerPerClickCost: 10
  }

  function getPower() {
    gameData.power += gameData.powerPerClick
    document.getElementById("powerGot").innerHTML = gameData.power + " Power got"
  }

  function buyPowerPerClick() {
    if (gameData.power >= gameData.powerPerClickCost) {
      gameData.power -= gameData.powerPerClickCost
      gameData.powerPerClick += 1
      gameData.powerPerClickCost *= 2
      document.getElementById("powerGot").innerHTML = gameData.power + " Power Got"
      document.getElementById("perClickUpgrade").innerHTML = "Strength the Muscles (Currently Level " + gameData.powerPerClick + ") Cost: " + gameData.powerPerClickCost + " Power"
    }
  }

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("MightyPowerSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("MightyPowerSave"))
    if (savegame !== null) {
    gameData = savegame
}