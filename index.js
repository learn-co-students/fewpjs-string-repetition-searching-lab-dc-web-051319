// // Code your solution here

function heyJude(verse) {
    return verse.repeat(16)
  }

// heyJude("Na na na na na na na, na na na na, hey Jude.", 16)


// function prohibitedLanguage(str) { 
//   if "candycorn" === search(str)
//   return "That is Prohibited"
//   else if "brusselsprouts"
//   return "prohibited"
//   else
//   return str
// }

function prohibitedLanguage(string) {
    return string.search(/candycorn|brusselssprouts/);
}

//  the prohibitedLanguage function itself is searching the string for /candycorn|brusslsprouts/