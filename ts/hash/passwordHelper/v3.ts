const calculatePasswordScore = (password) => {
    const state = {
      score: 0,
      strings: 0,
      numbers: 0,
      symbols: 0
    };
  
    const findChar = (char) => {
      const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (isNaN(char)) {
        state.strings++;
      } else if (format.test(char)) {
        state.symbols++;
      } else {
        state.numbers++;
      }
    };
  
    const passwordHelper = (word) => {
      const characters = word.split('');
      characters.forEach(findChar);
    };
  
    passwordHelper(password);
  
    const calculateScore = () => {
      const length = state.numbers + state.symbols + state.strings;
      const lengthAlgorithm = length > 4 ? length / 4 : 0;
      const stringsAlgorithm = state.strings > 4 ? state.strings / 4 : 0;
      const symbolsAlgorithm = state.symbols > 2 ? state.symbols : 0;
      const total = Math.round(lengthAlgorithm + stringsAlgorithm + symbolsAlgorithm);
      return total;
    };
  
    return calculateScore();
  };
  