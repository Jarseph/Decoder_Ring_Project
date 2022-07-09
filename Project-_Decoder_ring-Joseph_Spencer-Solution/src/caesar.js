// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || shift === 0 || !shift) return false;
    let message = input.toLowerCase().split("");


    let values = message.map((letter) => {
      let total = 0;
      encode === true ? total = letter.charCodeAt() + shift : total = letter.charCodeAt() - shift ;
      

      if (letter.charCodeAt() > 122 || letter.charCodeAt() < 97) {
          return String.fromCharCode(letter.charCodeAt());
      } else if (total > 122) {
        return String.fromCharCode((96 + (total - 122)));
      } else if (total < 97) {
        return String.fromCharCode((123 - (97 - total)));
      } else {
        return String.fromCharCode(total);
      }
    });
    return values.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };