const romanize = (num) => {
  if (isNaN(num)) return NaN;
  let digits = String(+num).split("");
  const key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  let roman = "";
  let i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
};

const char_to_int = (c) => {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};
const roman_to_Int = (str1) => {
  if (str1 == null) return -1;
  let num = char_to_int(str1.charAt(0));
  let pre, curr;

  for (let i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
};

const checkCorrectRoman = (input) => {
  let number;
  const hundred = [];
  for (let i = 0; i <= 100; i++) {
    hundred.push({ roman: romanize(i), numeral: i });
  }
  hundred.forEach((nums) => {
    if (input === nums.roman) {
      number = nums.roman;
    }
  });
  return number;
};

const romanCalculator = () => {
  let sum = 0;
  let inputNum;
  let operator;
  let inputNum2;
  let inputExit;
  while(inputExit != 'exit'){
    inputNum = prompt("Please Enter Roman Number 1");
    operator = prompt(`Enter operator :  + , - , / , *`);
    inputNum2 = prompt("Please Enter Roman Number 2");
    inputExit = prompt('To finish type exit else continue');
    if (checkCorrectRoman(inputNum) && checkCorrectRoman(inputNum2) && inputNum !== null && inputNum2 !== null) {
        if (operator === "+"){
           sum += roman_to_Int(inputNum) + roman_to_Int(inputNum2);
            // return inputNum = romanize(sum)
        }
        if (operator === "-"){
          sum += roman_to_Int(inputNum) - roman_to_Int(inputNum2);
          //  return inputNum = romanize(sum)
        }
        if (operator === "*"){
          sum += roman_to_Int(inputNum) * roman_to_Int(inputNum2);
          //  return inputNum = romanize(sum)
        }
        if (operator === "/"){
          sum += roman_to_Int(inputNum) / roman_to_Int(inputNum2);
          //  return inputNum = romanize(sum)
        }
    }else{
        return 'one or both of the input numbers is not roman or they are higher than 100'
    }
    if(inputExit === 'exit'){
      break;
    }
  }
  return romanize(sum);
};

document.querySelector('.answer-para').textContent = romanCalculator()