var treenum = 0;
var lifetimetrees = 0;
var treeClickMult = 0;
var treeUpgrade = false;
var treeUpgradeOneAmount = 1;
var treePS;
var autoPlanter;
var PlanterDrone;

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum = treenum + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  lifetimetrees = lifetimetrees + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
}

function treeUpgradeOne() { //adds one to tree UpgradeAmount in exchange for trees.
  if(treenum >= (treeUpgradeOneAmount * 10) + treeUpgradeOneAmount){
    treenum = treenum - ((treeUpgradeOneAmount * 10) + treeUpgradeOneAmount);
    treeUpgradeOneAmount++;
    document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
  }
}


function treeUpgradeTwo() { //adds ten to tree UpgradeAmount in exchange for trees.
  if(treenum >= (treeUpgradeTwoAmount * 10) + treeUpgradeTwoAmount){
    treenum = treenum - ((treeUpgradeTwoAmount * 10) + treeUpgradeTwoAmount);
    treeUpgradeTwoAmount = treeUpgradeTwoAmount + 10;
    document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
  }
}
