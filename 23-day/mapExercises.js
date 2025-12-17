const bookCollection = [
  {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "978-0441172719",
    publicationYear: 1965,
    genre: ["Science Fiction", "Epic", "Adventure"],
    pages: 412,
    publisher: {
      name: "Chilton Books",
      location: "Philadelphia",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.25 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "The story of Paul Atreides, whose family assumes control of the desert planet Arrakis, the only source of the universe's most vital resource, 'the spice'.",
    chapters: 30,
    keywords: [
      "desert planet",
      "ecology",
      "politics",
      "religion",
      "giant worms",
    ],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0141439518",
    publicationYear: 1813,
    genre: ["Classic", "Romance", "Social Satire"],
    pages: 279,
    publisher: {
      name: "T. Egerton, Whitehall",
      location: "London",
    },
    isAvailable: false,
    ratings: [
      { source: "Goodreads", score: 4.27 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A classic novel chronicling the emotional development of Elizabeth Bennet, who learns the error of judging by first impressions and comes to appreciate Mr. Darcy.",
    chapters: 61,
    keywords: ["regency england", "marriage", "class", "manners", "wit"],
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publicationYear: 1949,
    genre: ["Dystopian", "Political Fiction", "Science Fiction"],
    pages: 328,
    publisher: {
      name: "Secker & Warburg",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.17 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "Winston Smith struggles to survive in a totalitarian regime where truth is propaganda and surveillance is constant.",
    chapters: 24,
    keywords: ["totalitarianism", "surveillance", "doublethink", "big brother"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0061120084",
    publicationYear: 1960,
    genre: ["Southern Gothic", "Bildungsroman", "Social Drama"],
    pages: 324,
    publisher: {
      name: "J.B. Lippincott & Co.",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.29 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "Narrated by the young Scout Finch, the novel examines racial injustice in the American South through the eyes of her father, lawyer Atticus Finch.",
    chapters: 31,
    keywords: ["racism", "innocence", "justice", "alabama", "childhood"],
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isbn: "978-0062316097",
    publicationYear: 2011,
    genre: ["Non-Fiction", "History", "Anthropology"],
    pages: 464,
    publisher: {
      name: "Harper",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.37 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "A comprehensive look at the history of humanity, from the evolution of archaic human species to the twenty-first century's challenges.",
    chapters: 20,
    keywords: [
      "human evolution",
      "cognitive revolution",
      "historical analysis",
      "agriculture",
    ],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0345339683",
    publicationYear: 1937,
    genre: ["Fantasy", "Adventure", "Children's Literature"],
    pages: 310,
    publisher: {
      name: "George Allen & Unwin",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.28 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "The tale of Bilbo Baggins, a hobbit who is recruited by Gandalf the wizard and a company of dwarves to steal treasure guarded by the dragon Smaug.",
    chapters: 19,
    keywords: ["middle-earth", "dragons", "elves", "quest", "riddles"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    isbn: "978-0142437247",
    publicationYear: 1851,
    genre: ["Adventure", "Gothic", "Classic"],
    pages: 624,
    publisher: {
      name: "Harper & Brothers",
      location: "New York",
    },
    isAvailable: false,
    ratings: [
      { source: "Goodreads", score: 3.51 },
      { source: "Amazon", score: 4.3 },
    ],
    summary:
      "The narrative of the obsessed Captain Ahab and his pursuit of Moby Dick, a giant white sperm whale.",
    chapters: 135,
    keywords: [
      "whaling",
      "obsession",
      "sea adventure",
      "symbolism",
      "vengeance",
    ],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publicationYear: 1925,
    genre: ["Classic", "Tragedy", "Modernist"],
    pages: 180,
    publisher: {
      name: "Charles Scribner's Sons",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.93 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "Narrated by Nick Carraway, the story of the mysterious millionaire Jay Gatsby and his unrequited love for the married Daisy Buchanan.",
    chapters: 9,
    keywords: [
      "jazz age",
      "american dream",
      "wealth",
      "illusion",
      "long island",
    ],
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isbn: "978-0553380163",
    publicationYear: 1988,
    genre: ["Non-Fiction", "Science", "Cosmology"],
    pages: 256,
    publisher: {
      name: "Bantam Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.09 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "An explanation of cosmology for the non-specialist reader, covering concepts like the Big Bang, black holes, and time travel.",
    chapters: 12,
    keywords: ["black holes", "relativity", "universe", "quantum mechanics"],
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    isbn: "978-0307387899",
    publicationYear: 2006,
    genre: ["Post-Apocalyptic", "Literary Fiction", "Horror"],
    pages: 287,
    publisher: {
      name: "Alfred A. Knopf",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.95 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A father and his son journey across a post-apocalyptic landscape, trying to maintain their humanity while carrying a fire against the darkness.",
    chapters: 15,
    keywords: ["survival", "father-son", "dystopia", "bleak", "ashes"],
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    isbn: "978-0060883287",
    publicationYear: 1967,
    genre: ["Magical Realism", "Epic", "Latin American Literature"],
    pages: 417,
    publisher: {
      name: "Harper Perennial",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.1 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "The multi-generational story of the Buendía family, whose patriarch founds the mythical town of Macondo.",
    chapters: 20,
    keywords: ["macondo", "buendía", "solitude", "incest", "cyclical time"],
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    isbn: "978-0756404741",
    publicationYear: 2007,
    genre: ["Fantasy", "High Fantasy", "Adventure"],
    pages: 662,
    publisher: {
      name: "DAW Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.55 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "The first volume in the Kingkiller Chronicle, telling the story of Kvothe, an infamous adventurer, musician, and arcanist.",
    chapters: 96,
    keywords: ["magic", "music", "coming of age", "university", "arcane"],
  },
  {
    title: "Where the Sidewalk Ends",
    author: "Shel Silverstein",
    isbn: "978-0060256678",
    publicationYear: 1974,
    genre: ["Poetry", "Children's Literature"],
    pages: 176,
    publisher: {
      name: "HarperCollins",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.39 },
      { source: "Amazon", score: 4.9 },
    ],
    summary:
      "A collection of whimsical and sometimes profound poems and drawings.",
    chapters: 0, // Poetry books often don't have traditional chapters
    keywords: ["humor", "rhyme", "imagination", "childhood"],
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    isbn: "978-0679724777",
    publicationYear: 1992,
    genre: ["Dark Academia", "Mystery", "Literary Fiction"],
    pages: 559,
    publisher: {
      name: "Alfred A. Knopf",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.07 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A group of eccentric classics students at a Vermont college become involved in a murder.",
    chapters: 10,
    keywords: ["classics", "vermont", "murder", "cult", "greek tragedy"],
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    isbn: "978-0345539434",
    publicationYear: 1980,
    genre: ["Non-Fiction", "Science", "Astronomy"],
    pages: 384,
    publisher: {
      name: "Random House",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.41 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "An exploration of science and the universe, originally published alongside the famous television series.",
    chapters: 13,
    keywords: ["space", "stars", "evolution", "pale blue dot"],
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    isbn: "978-0307454546",
    publicationYear: 2005,
    genre: ["Mystery", "Thriller", "Crime"],
    pages: 656,
    publisher: {
      name: "Norstedts Förlag",
      location: "Stockholm",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.14 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the disappearance of a woman from a wealthy family decades earlier.",
    chapters: 35,
    keywords: ["sweden", "hacking", "journalism", "family secrets"],
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    isbn: "978-1451629173",
    publicationYear: 1961,
    genre: ["Satire", "War Fiction", "Black Comedy"],
    pages: 453,
    publisher: {
      name: "Simon & Schuster",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.02 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A satirical look at the absurdity of war through the eyes of Yossarian, a U.S. Army Air Force bombardier in World War II.",
    chapters: 42,
    keywords: ["world war ii", "absurdism", "military bureaucracy", "pilot"],
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "978-0062315007",
    publicationYear: 1988,
    genre: ["Philosophical Fiction", "Adventure"],
    pages: 208,
    publisher: {
      name: "HarperOne",
      location: "San Francisco",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.9 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A shepherd boy named Santiago travels from Spain to the Egyptian desert in search of a treasure.",
    chapters: 2, // Divided into "Part One" and "Part Two"
    keywords: ["personal legend", "destiny", "treasure", "egyptian desert"],
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn: "978-0141439471",
    publicationYear: 1818,
    genre: ["Gothic", "Science Fiction (early)", "Horror"],
    pages: 280,
    publisher: {
      name: "Lackington, Hughes, Harding, Mavor & Jones",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.82 },
      { source: "Amazon", score: 4.4 },
    ],
    summary:
      "Victor Frankenstein, a scientist, creates a grotesque yet sentient creature in an unorthodox scientific experiment.",
    chapters: 24,
    keywords: ["monster", "creation", "mad scientist", "revenge", "geneva"],
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isbn: "978-1451673312",
    publicationYear: 1953,
    genre: ["Dystopian", "Science Fiction"],
    pages: 158,
    publisher: {
      name: "Ballantine Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.0 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A firefighter named Guy Montag is tasked with burning books in a future where intellectual thought is suppressed.",
    chapters: 3,
    keywords: [
      "censorship",
      "firefighter",
      "books",
      "future society",
      "media saturation",
    ],
  },
];

// -----------------------------------------------------------------------------
// MAP EXERCISES
// -----------------------------------------------------------------------------

// 1. Exercise: Extract Titles
// Function Name: getTitles
// Instruction: Use the .map() method to iterate over the `bookCollection` array. For each book object, extract the `title` property. Return a new array of strings where each string is a book title.
// Example Output: ["Dune", "Pride and Prejudice", ...]
// Hint: Return `book.title` inside the callback function.

function getTitles(){
    
}

// 2. Exercise: Authors in Uppercase
// Function Name: getAuthorsUpperCase
// Instruction: Use .map() to create a new array of author names. Inside the callback, access the `author` property and convert it to uppercase using the `.toUpperCase()` string method.
// Example Output: ["FRANK HERBERT", "JANE AUSTEN", ...]
// Hint: `return book.author.toUpperCase()`.

// 3. Exercise: Title and Year Objects
// Function Name: getTitleAndYear
// Instruction: Use .map() to create a new array of objects. For each book, return a NEW object that only contains two properties: `title` (from the book's title) and `publicationYear` (from the book's publicationYear).
// Example Output: [{ title: "Dune", publicationYear: 1965 }, { title: "Pride and Prejudice", publicationYear: 1813 }, ...]
// Hint: Return a new object literal: `return { title: book.title, publicationYear: book.publicationYear };`

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
