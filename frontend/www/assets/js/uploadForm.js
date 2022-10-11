(function () {
  console.log(document.getElementById("dropzone-excelFile"));

  document
    .getElementById("dropzone-excelFile")
    .addEventListener("focus", (event) => {
      console.log("wASDADSADSADSADw");
      event.target.querySelector("span").innerHTML = "BLUBH";
    });
})();
