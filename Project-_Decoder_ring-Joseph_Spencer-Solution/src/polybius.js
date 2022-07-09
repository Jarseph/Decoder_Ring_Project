// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function checkIfEven(message) {
    let total = 0;
    message.split("").map((letter) => {
      if (letter != ' ') {
        total += 1;
      }
    });
    return total % 2 == 0 ? message : false
  } 
  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "(i/j)": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55
    }
    if (encode) {
      const message = input.toLowerCase().split("");
      const convertedMessage = message.map((letter) => {
          if (letter != ' ' && letter != 'i' && letter != 'j') {
            return polybiusSquare[letter];
          } else if (letter === 'i' || letter === 'j') {
            return polybiusSquare["(i/j)"];
          } else {
            return letter;
          }
      }).join('');
      return convertedMessage;
    } else if(checkIfEven(input) == false) {
        return false;
    } else {
        const message = input.split(/([' '])/);      
        const convertedMessage = message.map((letterGroup) => {
          if (letterGroup === ' ') {
            return letterGroup;
          } else {
            let letterMatch = letterGroup.match(/.{1,2}/g);
            let foundLetters = [];
            letterMatch.map((letterCode) => {
              Object.entries(polybiusSquare).forEach(([key, code]) => {
                if (code.toString() === letterCode) {
                  foundLetters.push(key);
                }
              })
            });
            return foundLetters.join('');
          }
        }).join('');
        return convertedMessage;
    }
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };