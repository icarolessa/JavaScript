// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let copyBookList = [...arr]
  copyBookList.push(bookName);
  return copyBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let copyBookList = [...arr]
  const book_index = copyBookList.indexOf(bookName);
  if (book_index >= 0) {
    copyBookList.splice(book_index, 1);
    return copyBookList;
    // Change code above this line
    }
}