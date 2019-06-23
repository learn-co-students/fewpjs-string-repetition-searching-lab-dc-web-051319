// Code your solution here

function heyJude(word){
  return word.repeat(16)
}

// '/RegExp1|RegExp2'

function prohibitedLanguage(string) {
  let bannedWords = /candycorn|brusselssprouts/;

  return string.search(bannedWords);

}
