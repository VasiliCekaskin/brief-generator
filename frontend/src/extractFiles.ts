export const extractFiles = (
  files: FileList
): { excelFile: File; docxFile: File } => {
  if (files.length > 2) {
    throw new Error(
      "Du darfst nur eine Excel Datei und eine Word Datei hochladen!"
    );
  }

  let excelFile = null;
  let docxFile = null;

  for (var i = 0; i < files.length; i++) {
    const currentFile = files.item(i);

    if (
      currentFile?.name.endsWith(".xlsx") ||
      currentFile?.name.endsWith(".xls")
    ) {
      excelFile = currentFile;
    } else if (
      currentFile?.name.endsWith(".docx") ||
      currentFile?.name.endsWith(".doc")
    ) {
      docxFile = currentFile;
    }
  }

  if (!excelFile) {
    throw new Error("Bitte wähle jeweils eine Excel und Word Datei aus.");
  }
  if (!docxFile) {
    throw new Error("Bitte wähle jeweils eine Excel und Word Datei aus.");
  }

  return {
    excelFile,
    docxFile,
  };
};
