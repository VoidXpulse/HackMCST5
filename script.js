var treenum = 0;

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum++;
}

var treePng = document.getElementById('treepng'); 
treePng.addEventListener('click', clickHandler);
