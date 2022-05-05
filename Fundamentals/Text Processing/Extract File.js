function ExtractFile(string) {
  let fileNameIndexStart = string.lastIndexOf("\\") + 1;
  let fileExtensionStart = string.lastIndexOf(".") + 1;
  let fileNameIndexEnd = fileExtensionStart - 1;
  let fileName = string.substring(fileNameIndexStart, fileNameIndexEnd);
  let fileExtension = string.substring(fileExtensionStart);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
ExtractFile("C:\\Internal\\training-internal\\Template.pptx");
