// Code your solution here

function heyJude(verse) {
  return verse.repeat(16)
}

// Create a function called prohibitedLanguage that will prevent usernames with the Strings "candycorn" and/or "brusselssprouts"

function prohibitedLanguage(username) {
  let bannedWords = /candycorn|brusselssprouts/;

  return username.search(bannedWords)

} 