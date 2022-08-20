console.log("Learning Regular Expression - 3");

// const regex = /^d/i;

//~%=> Character Sets
//% => to allow or not to allow the characters mention inside the square brackets

let regex = /dab[rtb]nder/; //# can be any one character from r, t and b.

regex = /dab[a-z]nder/; //# can be any one character from a to z.

regex = /dab[^rtb]nder/; //# carrot symbol "^" will work as not in brackets. can be any one character other than r, t and b.

regex = /da[^mno]ind[er]r/; //# can use multiple character sets in one string.

regex = /da[a-zA-Z]inde[rs0-9][0-9]/; //# we have declare 3 character sets - (1.) any one character from a to z or A to Z. (2.) any character from r, s, 0 to 9. (3.) any no. from 0 to 9. all the 3 character sets need to fullfill to get the match.

//~% => Quantifiers
//% => to specify the quantity of any character inside the curly braces

regex = /re{2}t/; //# the character before the curly braces should appear exactly two times to match.

regex = /re{0,2}t/; //# the character should be exactly 0 to 2 times.

//~% => Groupings
//% => we use paranthesis for groupings ()

regex = /(reet){2}([0-9]kaur){3}/; //# the characters in the paranthesis are grouped. check example below
const str = "reetreet1kaur1kaur1kaur";

// const str = "dabinder9 singh";

// const str = "reet kaur";

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`This "${str}" match the reg. exp. "${regex.source}"`);
} else {
  console.log(`This "${str}" does NOT match the reg. exp. "${regex.source}"`);
}
