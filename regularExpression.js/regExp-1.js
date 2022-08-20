console.log("Hi Dabinder");

let reg = /dabinder/;
// reg = /dabinder/g;
// reg = /dabinder/i;

//~*Regular expression literals starts and ends with froward slash
//* whatever we want to search will be written inside the two forward slash
//* "g" flag means to search globally.
//* "i" flag means not case-sensitive

console.log(reg);
console.log(reg.source);

let str =
  "This is dabinder learing regular expression and i know dabinder can do it.";

//~% => Functions to match expressions
//% => 1.) "exec()" will return an "array" => "match" or "null" => "no match"
//? => return only one match at a time.

let result = reg.exec(str);
console.log(result);
// result = reg.exec(str); //--> we can use multiple exec with global flag
// console.log(result);
// result = reg.exec(str);
// console.log(result);

//# we can retrieve the elements from the exec array.
if (result) {
  console.log(result.input);
  console.log(result.index);
  console.log(result.groups);
  console.log(result[0]);
}

//% => 2.) "test()" will return true or false

let result2 = reg.test(str);
console.log(result2);

//% => 3.) "match()" will return array of results if matched or null if not matched

// result2 = reg.match(str) => this is wrong
result2 = str.match(reg); //# => this is right
console.log(result2);

//% => 4.) "search" will return the first index of the searched input or will return "-1" if null.

result2 = str.search(reg);
console.log(result2);

//% => 5.) "replace" will return new "replaced" string with all the replacements. if no global flag, then only first match will be replaced.

result2 = str.replace(reg, "REET");
console.log(result2);
