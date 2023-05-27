const calculatePasswordScore = (password) => {
    const state = {
      strings: 0,
      numbers: 0,
      symbols: 0
    };
  
    const countStrings = (char) => {
      if (isNaN(char)) {
        state.strings++;
      }
    };
  
    const countNumbers = (char) => {
      if (!isNaN(char)) {
        state.numbers++;
      }
    };
  
    const countSymbols = (char) => {
      const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (format.test(char)) {
        state.symbols++;
      }
    };
  
    const processPassword = (word) => {
      const characters = word.split('');
      characters.forEach((char) => {
        countStrings(char);
        countNumbers(char);
        countSymbols(char);
      });
    };
  
    processPassword(password);
  
    const calculateScore = () => {
      const { strings, numbers, symbols } = state;
      const length = numbers + symbols + strings;
      const lengthAlgorithm = length > 4 ? length / 4 : 0;
      const stringsAlgorithm = strings > 4 ? strings / 4 : 0;
      const symbolsAlgorithm = symbols > 2 ? symbols : 0;
      const total = Math.round(lengthAlgorithm + stringsAlgorithm + symbolsAlgorithm);
      return total;
    };
  
    return calculateScore();
  };
  