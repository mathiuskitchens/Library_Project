const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}
console.log("Waiting for a click...");
// Get user input
const submitButton = document.getElementById("submit");
const form = document.getElementById("my-form");

const bookParent = document.getElementById("book-parent");
const input = document.querySelector("input");
const button = document.querySelector("button");
let printedReadStatus = "";
// Function to add newBook to DOM

input.focus();

form?.addEventListener("submit", (e) => {
  console.log("CLICK...");
  e.preventDefault();
  const formData = new FormData(form);
  // Use constructor for newBook, assign form Data to it
  const testBook = formData.getAll("form-info")?.valueOf();
  const newBook = new Book(...testBook);

  // Get read status for visual
  console.log(newBook.readStatus);

  // create placeholders for new book being added to DOM
  const wholeBook = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const bookPages = document.createElement("h3");
  const readStatus = document.createElement("h3");

  // Assign newBook object properties to placeholders
  bookTitle.textContent = newBook.title;
  bookAuthor.textContent = newBook.author;
  bookPages.textContent = newBook.pageCount;

  function updateStatus(readStatus) {
    if (readStatus === "on") {
      printedReadStatus = "Read";
    } else {
      printedReadStatus = "Not Read";
    }
  }
  updateStatus();
  readStatus.textContent = printedReadStatus;

  // add to DOM
  wholeBook.appendChild(bookTitle);
  wholeBook.appendChild(bookAuthor);
  wholeBook.appendChild(bookPages);
  wholeBook.appendChild(readStatus);
  bookParent.appendChild(wholeBook);

  // add class to whole div to match styling
  wholeBook.setAttribute("class", "book-card");

  // Test for success
  // refocus
  input.focus();
});

// Loop through array to display book on page
