console.log("Learning Regular Expression - 2");

let regex = /dabinder/;

//% => metacharacter symbols
regex = /^dab/; //# "^" means expression will match if "string starts with - dab".

regex = /er$/; //# "$" means expression will match if "string ends with - er".

regex = /dab.nder/; //# "." match only any one character

regex = /dabin*der/; //# "*" match 0 or more characters

regex = /da?binder?s/; //# "?" after character means that character optional.

regex = /dab\*nder/; //# "\" will check the exact character we want to match after the backward slash. this is used to escape the special characters.

let str = "dab*nder";

let result = regex.exec(str);

console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(
    `The string "${str}" does match the regular expression "${regex.source}"`
  );
} else {
  console.log(
    `The string "${str}" does NOT match the regular expression "${regex.source}"`
  );
}
