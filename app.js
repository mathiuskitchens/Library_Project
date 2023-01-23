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

form?.addEventListener("submit", (e) => {
  console.log("CLICK...");
  e.preventDefault();
  const formData = new FormData(form);
  // Use constructor for newBook, assign form Data to it
  const testBook = formData.getAll("form-info")?.valueOf();
  const newBook = new Book(...testBook);
  //  onst newBook = new Book(formData.getAll("form-info")?.valueOf());
  // Test for success
  console.log(newBook.title);
  console.log(newBook.author);
  console.log(newBook.pageCount);
  return newBook;
  // add book to page
  // myLibrary.push(newBook);
  // console.log(myLibrary);
});

function addNewBook(newBook) {}

// Loop through array to display book on page
