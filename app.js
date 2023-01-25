const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}
console.log("Waiting for a click...");

const submitButton = document.getElementById("submit");
const form = document.getElementById("my-form");

// tag DOM elements for reference
const bookParent = document.getElementById("book-parent");
const input = document.querySelector("input");
const button = document.querySelector("button");
const image = document.getElementById("book-image");

input.focus();

// Function to get user input and add newBook to DOM
form?.addEventListener("submit", (e) => {
  console.log("CLICK...");
  e.preventDefault();
  const formData = new FormData(form);
  // Use constructor for newBook, assign form Data to it
  const testBook = formData.getAll("form-info")?.valueOf();
  const newBook = new Book(...testBook);

  // create placeholders for new book being added to DOM
  const wholeBook = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookImage = document.createElement("img");
  const bookAuthor = document.createElement("h3");
  const bookPages = document.createElement("h3");
  const readStatus = document.createElement("h3");

  // Assign newBook object properties to placeholders
  bookTitle.textContent = newBook.title;
  bookAuthor.textContent = newBook.author;
  bookPages.textContent = newBook.pageCount;
  readStatus.textContent = newBook.readStatus;
  bookImage.setAttribute("src", "images/book-cover-placeholder.png");

  console.log(newBook.readStatus);
  console.log(testBook[3]);
  const readHolder = testBook[3];
  if (readHolder === "on") {
    readStatus.textContent = "Read";
  } else {
    readStatus.textContent = "Not Read";
  }

  // add to DOM
  wholeBook.appendChild(bookTitle);
  wholeBook.appendChild(bookImage);
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
