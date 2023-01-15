/* const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.printInfo = function () {
    console.log(`${title} by ${author}, ${pageCount} pages, `, readStatus);
  };
} */

console.log("Waiting for a click...");

const submitButton = document.getElementById("submit");
const form = document.getElementById("my-form");

form?.addEventListener("submit", (event) => {
  console.log("CLICK...");
  event.preventDefault();
  const formData = new FormData(form);

  console.log(formData.getAll("form-info")?.valueOf());
});
