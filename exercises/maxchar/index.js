// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maximumChar = '';

  for (let letter of str) {
    chars[letter] ? chars[letter]++ : (chars[letter] = 1);
  }
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maximumChar = char;
    }
  }
  return maximumChar;
}

module.exports = maxChar;
