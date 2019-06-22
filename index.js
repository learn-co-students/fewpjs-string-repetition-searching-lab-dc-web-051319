// Code your solution here

let heyJude = function(){
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
}



// Create a function called prohibitedLanguage that will prevent usernames with the Strings "candycorn" and/or "brusselssprouts"
// Note: A tool in regular expressions is the pipe character | (the pipe character that shares the backslash \ key on standard keyboards) which allows you to search for alternative words /RegExp1|RegExp2/. Instead of just searching for just one word, we can use the pipe character to search for multiple words.

let prohibitedLanguage = function(string) {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}