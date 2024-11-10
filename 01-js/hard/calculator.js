/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    this.result = 0;
  }

  add(number){
    this.result += number;
  }
  subtract(number){
    this.result -= number;
  }
  multiply(number){
    this.result *= number;
  }
  divide(number){

    if(number === 0)
        throw Error();

    this.result /= number;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  #isDigitOrDecimal(charCode) {
      return (48 <= charCode && charCode <= 57) || (charCode === 46); // numeric (0-9)
  }

  #isAlphabet(charCode) {
    // lower alpha (a-z) || upper alpha (A - Z)
    return (65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122);
  }

  #isValidExpression(s){

    let st = [];
    let n = s.length;

    for(let i = 0; i < n; i++){

      let currCharCode = s.charCodeAt(i);

      if(this.#isAlphabet(currCharCode)){
        return false;
      } else if(currCharCode === '('.charCodeAt(0)){

        st.push(s[i]);

      } else if(currCharCode === ')'.charCodeAt(0)){
        if(st.length > 0) st.pop();
        else return false;
      }
    }

    return st.length === 0;
  }

  #parseFloat(s){
    let ans = 0;
    let isDecimal = false;
    let decimalFactor = 0.1;

    for(let i = 0; i < s.length; i++){

      if(s.charCodeAt(i) === '.'.charCodeAt(0)){
        isDecimal = true;
      } else {
        let currNum = ( s.charCodeAt(i) - '0'.charCodeAt(0) );
        if(isDecimal){

          ans += currNum * decimalFactor;
          decimalFactor /= 10;

        } else {
          ans = ans * 10 + currNum;
        }
      }
    }

    return ans;

  }

  #helper(s, idx){
    
    let sign = "+";
    let curr = 0, prev = 0, res = 0;
    let n = s.length;

    while(idx < n){

      let currCharCode = s.charCodeAt(idx);

      if(this.#isDigitOrDecimal(currCharCode)){
        let start = idx;
        while(idx < n && this.#isDigitOrDecimal(s.charCodeAt(idx))) idx++;
        let l = idx - start;
        curr = this.#parseFloat(s.substr(start,l));
        idx--;

        switch (sign) {
          case "+":
            res += curr;
            prev = curr;
            break;
          case "-":
            res -= curr;
            prev = -curr;
            break;
          case "*":
            res -= prev;
            prev = prev * curr;
            res += prev;
            break;
          case "/":
            if(curr === 0)
              throw Error();
            res -= prev;
            prev = prev / curr;
            res += prev;
            break;
        }
      } else if (currCharCode === '('.charCodeAt(0)){
        idx++;
        let temp = this.#helper(s,idx);
        curr = temp.ans;
        idx = temp.idx;

        switch (sign) {
          case '+':
            res += curr;
            prev = curr;
            break;
          case '-':
            res -= curr;
            prev = -curr;
            break;
          case '*':
            res -= prev;
            prev = prev * curr;
            res += prev;
            break;
          case '/':
            if(curr === 0)
              throw Error();
            res -= prev;
            prev = prev / curr;
            res += prev;
            break;
        }

      } else if (currCharCode === ')'.charCodeAt(0)){
        return {
          ans : res,
          idx : idx
        }
      } else if (currCharCode !== ' '.charCodeAt(0)){
        sign = String.fromCharCode(currCharCode);
      }

        idx++;
    }

    return {
      ans : res,
      idx : idx
    }
  }

  calculate(s){

    if(!this.#isValidExpression(s)){
      throw new Error();
    }

    this.result = this.#helper(s, 0).ans;
  }

}

module.exports = Calculator;
