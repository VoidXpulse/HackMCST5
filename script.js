var treenum = 0;

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum++;
  document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
}
