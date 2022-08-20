console.log("Learning Regular Expression - 4");

//~% => Character Classes

//% => WORD CHARACTERS :

let regex = /r\w[a-z]t/; //# "\w" means any one word character => _, alphabet or numbers

regex = /\w+ersingh/; //# "\w+" means any no. of characters

//% => NON WORD CHARACTERS :

regex = /\Wsingh/; //# will start search from " " space or non word character

regex = /\W+singh/; //# one or more non word character

regex = /\d9999/; //# "\d" means one digit

regex = /singh \d+/; //# "\d+" means one or more digit

regex = /\D999/; //# "\D" means non-digit word

regex = /\D+999/; //# "\D+" means non-digit word

regex = /\w+er\ssingh/; //# to include " " space in search then use "\s"

regex = /singh\s+/; //# to include " " space in search then use "\s"

regex = /\Ssingh/; //# "\S" means non white-space character

regex = /\S+er/; //# "\S" means non white-space character

regex = /inder\b/; //# "\b" word boundary means any non word character

//~% => ASSERTIONS :

regex = /e(?=r)/; //# means character should be equal to r after e

regex = /e(?!r)/; //# means character should not be equal to r after e

let str = "reet kaur";

str = "dabindersingh";

str = "dabi%ndersingh"; //# "%" is not a character will start the search after "%"

str = "dabinder %$&*#singh";

str = "dabinder isingh         89999999 8789reetrrrrrrr999";

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`This "${str}" match the regular expression "${regex}"`);
} else {
  console.log(`This "${str}" does NOT match the regular expression "${regex}"`);
}
