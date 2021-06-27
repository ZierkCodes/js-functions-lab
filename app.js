/* 
Exercise 1 (completed below):
  -Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  // or more "elegantly" using the fantastic ternary expression:
  // function maxOfTwoNumbers(x, y) {
  //   return  x >= y ? x : y;
  // }
  
  console.log("Exercise 1 Result:\n", maxOfTwoNumbers(3, 9));
  
  /* 
  Exercise 2:
    - Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  */
  
  const maxOfThree = function(x, y, z) {
    if(z > x && y);
    return z;
  }
  
  console.log("Exercise 2 Result:\n", maxOfThree(3, 9, 16))
  
  /* 
  Exercise 3: 
    - Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
  */
  
  let isCharAVowel = function(letter) {
    return RegExp('[aeiou]', 'i').test(letter);
  };
  
  console.log(
  `Exercise 3 Result:
   E: ${isCharAVowel("E")} 
   m: ${isCharAVowel("m")}
   o: ${isCharAVowel("o")}
   t: ${isCharAVowel("t")}
   i: ${isCharAVowel("i")}
   v: ${isCharAVowel("v")}
   e: ${isCharAVowel("e")}
   T: ${isCharAVowel("T")}
   u: ${isCharAVowel("u")}
   n: ${isCharAVowel("n")}
   a: ${isCharAVowel("a")}`
  );
  
  /* 
  Exercise 4: 
    - Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
  */
  
  let sumArray = function(sum) {
    return sum.reduce((a, b) => a + b, 0)
  }
  
  console.log("Exercise 4 Result:\n", sumArray([2, 5, 15, 20]))
  
  /* 
  Exercise 5:
    - Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
  */
  
  let multiplyArray = function(product) {
    return product.reduce((a, b) => a * b, 1)
  }
  
  console.log("Exercise 5 Result:\n", multiplyArray([2, 6, 12]))
  
  /*
  Exercise 6:
    - Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
  */
  
  let numArgs = function () {
      return arguments.length
  };
  
  console.log(
  `Exercise 6 Result: 
   ${numArgs("Hello.", "I", "would", "like", "one", "taco", "plz.")}
   ${numArgs("Sir, you may not only order one taco here.")}
   ${numArgs("Fine.", "What else do you have?", "I would like my taco.")}
   ${numArgs("Nothing.", ":)")}
   ${numArgs("Noooooo!", "Foiled again!", "One day I will eat a taco!")}`
  )
  
  /*
  Exercise 7:
    - Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
  */
  
  let reverseString = function(str) {
     return str.split("").reverse().join("")
  }
  
  console.log("Exercise 7 Result:\n", reverseString("!stratpoP taeh ton oD"))
  
  /* 
  Exercise 8:
    - Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
  */
  
  let longestStringInArray = function(arr) {
     return arr.sort((a , b) => b.length - a.length)[0].length
  }
  
  console.log(
    "Exercise 8 Result:\n",
    longestStringInArray(["Please", "do", "not", "pet", "the", "taco", "cat"])
  )
  
  /* 
  Exercise 9: 
    - Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
  */
  
  // - 2 Parameters: Array, Arguments:Number
  // - RETURNS: Array of the strings that are longer then "Arguments:Number"
  
  // Potential Options: Ternary Operator replace if conditional: arr[0].length > 3 ? arr2.push[arr[0]]
  
  let stringsLongerThan = function(arr , args) {
    let result = [];
    arr.forEach((item) => item.length > args ? result.push(item) : false);
    return result;
  };
  
  console.log(
    "Exercise 9 Result:\n",
    stringsLongerThan(["say", "goodnight", "whenever", "you", "like"], 3)  
  )
  