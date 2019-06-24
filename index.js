// Code your solution here

let heyJude = (verse) => {
  return verse.repeat(16);
}
// "Na na na na na na na, na na na na, hey Jude.".repeat(16);

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);  
}
