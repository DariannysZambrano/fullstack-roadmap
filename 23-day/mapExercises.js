// -----------------------------------------------------------------------------
// MAP EXERCISES
// -----------------------------------------------------------------------------

const bookCollectionBD = require("./bookCollectionBD.json")

// 1. Exercise: Extract Titles
// Function Name: getTitles
// Instruction: Use the .map() method to iterate over the `bookCollection` array.
// For each book object, extract the `title` property. Return a new array of strings where each string is a book title.
// Example Output: ["Dune", "Pride and Prejudice", ...]
// Hint: Return `book.title` inside the callback function.

function getTitles(books) {
 return books.map((book) => {
    return book.title;
  });
}

console.log(getTitles(bookCollection));

// 2. Exercise: Authors in Uppercase
// Function Name: getAuthorsUpperCase
// Instruction: Use .map() to create a new array of author names. Inside the callback,
// access the `author` property and convert it to uppercase using the `.toUpperCase()` string method.
// Example Output: ["FRANK HERBERT", "JANE AUSTEN", ...]
// Hint: `return book.author.toUpperCase()`.

function getAuthorsUpperCase(books) {
  return books.map((book) => {
    return book.author.toUpperCase();
  });
}
// console.log(getAuthorsUpperCase(bookCollection));

// 3. Exercise: Title and Year Objects
// Function Name: getTitleAndYear
// Instruction: Use .map() to create a new array of objects. For each book, return a NEW object that only contains two properties:
//  `title` (from the book's title) and `publicationYear` (from the book's publicationYear).
// Example Output: [{ title: "Dune", publicationYear: 1965 }, { title: "Pride and Prejudice", publicationYear: 1813 }, ...]
// Hint: Return a new object literal: `return { title: book.title, publicationYear: book.publicationYear };`

function getTitleAndYear(books) {
  return books.map((book) => {
    return {
      title: book.title,
      publicationYear: book.publicationYear,
    };
  });
}
// console.log(getTitleAndYear(bookCollection));

// 4. Exercise: Formatted Strings
// Function Name: getBookInfoStrings
// Instruction: Use .map() to create an array of strings. For each book, return a string that follows this specific format: "[Title] was published in [Year]".
// Example Output: ["Dune was published in 1965", "Pride and Prejudice was published in 1813", ...]
// Hint: Use template literals with backticks: `` `${book.title} was published in ${book.publicationYear}` ``.

// 5. Exercise: Get Publisher Names
// Function Name: getPublisherNames
// Instruction: Use .map() to create an array containing just the name of the publisher for each book. Note that the `publisher` property is an object, so you need to access the `name` property inside it.
// Example Output: ["Chilton Books", "T. Egerton, Whitehall", ...]
// Hint: Access the nested property: `book.publisher.name`.

// 6. Exercise: Genre Counts
// Function Name: getGenreCounts
// Instruction: Use .map() to create an array of numbers. For each book, return the number of genres listed in its `genre` array.
// Example Output: [3, 3, ...] (because "Dune" has 3 genres: Science Fiction, Epic, Adventure)
// Hint: Return the length of the genre array: `book.genre.length`.

// 7. Exercise: First Keyword
// Function Name: getFirstKeyword
// Instruction: Use .map() to create an array containing only the FIRST keyword from each book's `keywords` array.
// Example Output: ["desert planet", "regency england", ...]
// Hint: Access the first element of the array using index 0: `book.keywords[0]`.

// 8. Exercise: Simplified Book Objects
// Function Name: getSimplifiedBooks
// Instruction: Use .map() to create an array of simplified book objects. Each object should have:
// - `title`: The book's title.
// - `author`: The book's author.
// - `isRecent`: A boolean value that is `true` if the `publicationYear` is greater than 2000, and `false` otherwise.
// Example Output: [{ title: "Dune", author: "Frank Herbert", isRecent: false }, ...]
// Hint: For `isRecent`, use a comparison: `isRecent: book.publicationYear > 2000`.

// 9. Exercise: Calculate Average Rating
// Function Name: getAverageRatings
// Instruction: Use .map() to create an array of numbers representing the average rating for each book.
// The `ratings` property is an array of objects. You need to calculate the average of the `score` properties from that array.
// Example Output: [4.525, 4.385, ...]
// Hint: Calculate the sum of scores (e.g., `book.ratings[0].score + book.ratings[1].score`) and divide by the number of ratings (`book.ratings.length`).

// 10. Exercise: Reformat for Frontend
// Function Name: reformatForFrontend
// Instruction: Use .map() to create an array of objects formatted for a frontend dropdown menu.
// Each object must have exactly two properties:
// - `label`: A string combining the title and author (e.g., "Dune - Frank Herbert").
// - `value`: The book's ISBN string.
// Example Output: [{ label: "Dune - Frank Herbert", value: "978-0441172719" }, ...]
// Hint: Return `{ label: `${book.title} - ${book.author}`, value: book.isbn }`.


// un raton se reproduce una vez al mes 12 ratoncitos, despues del segundo mes se reproduce dos meses 

// 
