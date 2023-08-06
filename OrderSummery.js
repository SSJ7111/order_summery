var coll = document.getElementsByClassName("selected__box");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("expand");
    var content = this.lastElementChild;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}


document.querySelectorAll(".selected__box").addEventListener("click", () => {
  document.querySelectorAll(".box").classList.add("newBox");
});
