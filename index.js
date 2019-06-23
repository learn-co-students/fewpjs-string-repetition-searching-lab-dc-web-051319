function heyJude(verse){
  return verse.repeat(16);
}

function prohibitedLanguage(string){
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}
