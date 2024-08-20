let element = document.querySelectorAll(".element");
let details = document.querySelector(".details");
let iconMinus = document.querySelector("#minus");
let iconPlus = document.querySelector("#plus");

element.forEach(container => {
   
    let iconMinus = container.querySelector("#minus");
    let iconPlus = container.querySelector("#plus");
    let details = container.querySelector(".details");

iconMinus.addEventListener("click", function() {
    if (iconPlus.style.display === "none") {
        iconPlus.style.display = "inline";
        iconMinus.style.display = "none";
        details.style.display = "none";
    }
  });


  iconPlus.addEventListener("click", function() {
    if (iconMinus.style.display === "none") {
        iconMinus.style.display = "inline";
        iconPlus.style.display = "none";
        details.style.display = "block";
    }
  });
});
