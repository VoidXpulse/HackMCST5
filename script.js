var treenum = 0;
var lifetimetrees = 0;
var treeClickMult = 0;
var treeUpgrade = false;
var treeUpgradeOneAmount = 0;

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum = treenum + treeUpgradeOneAmount;
  lifetimetrees = lifetimetrees + 1 +treeUpgradeOneAmount;
  document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
}

function treeUpgradeOne() {
  treenum = treenum - (treeUpgradeOneAmount * 1);
  treeUpgradeOneAmount++;
}
