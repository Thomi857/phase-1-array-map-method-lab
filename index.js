const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // List of exceptions where words should be kept upper case
  const exceptions = ['NaN', 'OO', 'JSONP'];

  // Special cases for exact word capitalization
  const specialCases = {
    'web api': 'Web API',  // "web api" should be "Web API"
    'nan': 'NaN',          // "nan" should be "NaN"
    'jsonp': 'JSONP'       // "jsonp" should be "JSONP"
  };

  return tutorials.map(title => {
    return title
      .split(' ')  // Split the title into words
      .map((word, index, words) => {
        // Handle special cases like "Web API", "NaN", "JSONP"
        if (specialCases[word.toLowerCase()]) {
          return specialCases[word.toLowerCase()];
        }

        // Keep exceptions like "NaN", "OO", "JSONP" in uppercase
        if (exceptions.includes(word)) {
          return word.toUpperCase(); // Ensures NaN, JSONP, OO are uppercase
        }

        // Handle "OO" as a special case to avoid it being treated as a function
        if (word === 'OO') {
          return 'OO'; // Ensures OO stays as "OO"
        }

        // General title casing: Capitalize the first and last words, lowercase others
        if (index === 0 || index === words.length - 1 || 
            !['a', 'and', 'for', 'in', 'of', 'on', 'the', 'to', 'with'].includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        // Keep conjunctions, articles, and prepositions lowercase
        return word.toLowerCase();
      })
      .join(' ');  // Join the words back together into a string
  });
};
