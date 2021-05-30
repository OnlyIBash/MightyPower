var automatedBuildings = {

    powerPerSecondTotal: 0,
    tier1Building: 0,
    tier1BuildingCost: 50,
    tier1BuildingCostIncrease: 0,
    tier1PowerPerSecond: 0,
    tier1AdditiveBonus:1,


}

var mainGameLoop = window.setInterval(function() {
  powerPerSecondFormula()
}, 1000)

function powerPerSecondFormula () {

    automatedBuildings.powerPerSecondTotal = automatedBuildings.tier1PowerPerSecond * automatedBuildings.tier1AdditiveBonus;
    
    gameData.power += automatedBuildings.powerPerSecondTotal;
    updateTotalPowerPerSecond();
    document.getElementById("powerGot").innerHTML = gameData.power + " Power got";
}

function updateTotalPowerPerSecond() {
    document.getElementById("showPowerPerSecond").innerHTML = automatedBuildings.powerPerSecondTotal +" Power gained per Second";
}

function buyTier1Auto(){
    if (gameData.power >= automatedBuildings.tier1BuildingCost) {
      automatedBuildings.tier1Building +=1;
      gameData.power -= automatedBuildings.tier1BuildingCost;
      automatedBuildings.powerPerSecondTotal += 1;
      updateTotalPowerPerSecond();
      automatedBuildings.tier1PowerPerSecond +=1;
      automatedBuildings.tier1BuildingCost += 10 + automatedBuildings.tier1BuildingCostIncrease;
      automatedBuildings.tier1BuildingCostIncrease += 5;
      document.getElementById("tier1BuildingButton").innerHTML = "The next automated hormone injector costs only "+ automatedBuildings.tier1BuildingCost;
      document.getElementById("tier1BuildingText").innerHTML = "Wow you now have "+ automatedBuildings.tier1Building + " auto injectors which produce " + automatedBuildings.tier1PowerPerSecond + " Power!";    
    }
  }

  function upgrade1Tier1(){
    if (gameData.power >= 120){
    automatedBuildings.tier1AdditiveBonus += 0.5;
    document.getElementById("upgrade1Tier1Text").innerHTML ="Wow you really improved your auto-injectors. Enjoy the huge bonus!"
    document.getElementById("upgrade1Tier1Button").classList.remove("hidden");
    updateTotalPowerPerSecond();

    } 
  }



