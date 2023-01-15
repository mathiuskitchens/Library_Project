const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.printInfo = function () {
    console.log(`${title} by ${author}, ${pageCount} pages, `, readStatus);
  };
}

const data = document.getElementsByClassName("bookInfo");

// const special = document.querySelectorAll('title');
const test = document
  .getElementById("myForm")
  .getElementsByClassName("bookInfo");

// console.log(special);
// console.log(test);
console.log(test);

document.querySelector("button").addEventListener("click", grabData);

document.getElementById("submitButton").addEventListener("click", (event) => {
  event.preventDefault();
});

function grabData() {
  console.log(test);
  // submit.preventdefault();
}

function addBookToLibrary() {
  // do stuff here
}
