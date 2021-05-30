var genericUpgrade1Highlight = false;
var genericUpgrade2Highlight = false;
var automatedUpdatesHighlight = false;


function genericUpgrade1(power){
    if (power >= 10 && genericUpgrade1Highlight===false){
        document.getElementById("perClickUpgrade").classList.remove("hidden");
        setHighlightUpgrades();
        genericUpgrade1Highlight=true;
    }
}

function genericUpgrade2(power){
    if (power >= 30 && genericUpgrade2Highlight===false){
        document.getElementById("strangeFluidUpgrade").classList.remove("hidden");
        setHighlightUpgrades();
        genericUpgrade2Highlight=true;
    }
}

function automatedUpdates(power){
    if (power >= 50 && automatedUpdatesHighlight===false){
        document.getElementById("textAutomatedPowerGain").classList.remove("hidden");
        document.getElementById("tier1BuildingButton").classList.remove("hidden");
        document.getElementById("tier1BuildingText").classList.remove("hidden");
        document.getElementById("showPowerPerSecond").classList.remove("hidden");
        setHighlightGame();
        automatedUpdatesHighlight===true;
    }
}