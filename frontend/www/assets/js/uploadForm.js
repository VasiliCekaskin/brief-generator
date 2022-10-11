(function () {
  document
    .getElementById("dropzone-excelFile")
    .addEventListener("change", (event) => {
      let fileName = event.target.files[0].name;

      document.getElementById("uploaded-excelFile").innerText = fileName;
    });

  console.log(document.getElementById("dropzone-excelFile"));

  document
    .getElementById("dropzone-docsFile")
    .addEventListener("change", (event) => {
      let fileName = event.target.files[0].name;

      document.getElementById("uploaded-docsFile").innerText = fileName;
    });
})();
