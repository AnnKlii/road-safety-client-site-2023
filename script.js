var item = document.getElementById("item");
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.onclick = function () {
    item.style.backgroundColor = "lightgreen";
}

no.onclick = function () {
    item.style.backgroundColor = "pink";
}
not.onclick = function () {
    item.style.backgroundColor = "pink";
}

var help = document.getElementById("help");
help.onclick = function () {
    test.style.display = "block";
}