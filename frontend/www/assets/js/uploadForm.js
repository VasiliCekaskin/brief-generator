(function () {
  document
    .getElementById("dropzone-excelFile")
    .addEventListener("change", (event) => {
      let fileName = event.target.files[0].name;

      document.getElementById("uploaded-excelFile").innerText = fileName;
    });

  document
    .getElementById("dropzone-docsFile")
    .addEventListener("change", (event) => {
      let fileName = event.target.files[0].name;

      document.getElementById("uploaded-docsFile").innerText = fileName;
    });
})();

function uploadForm() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  xhttp.send({ excelFile, docxFile });
}
