// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {return false}; 

    let letterCheck = {}
    Array.from(alphabet).forEach((letter) => {
      if (!letterCheck[letter]) {
        letterCheck[letter] = 0;
      } 
      letterCheck[letter] +=  1;  
    })
    if (Object.values(letterCheck).every((number) => number <= 1)) {

      let message = input.toLowerCase();
      let charCode = 97;
      let cipher = {};
      let finalMessage = '';
      [...alphabet].forEach(letter => {
          cipher = {
            ...cipher,
            [String.fromCharCode(charCode)] : letter 
          }
          charCode++
        });
      Array.from(message).forEach((letter => {
        //encoding a message
        if (letter !=  ' ' && encode) {
          Object.entries(cipher).forEach(([key, value]) => {
            if (key === letter) {
              finalMessage += value;
            }
          })
        } else if (letter !=  ' ' && !encode) {
          Object.entries(cipher).forEach(([key, value]) => {
            if (value === letter) {
              finalMessage += key;
            }
          })
        } else {
          finalMessage += letter;
        }
      }));
      return finalMessage
    }
    return false;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };