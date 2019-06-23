function heyJude(){
  
  const line =  "Na na na na na na na, na na na na, hey Jude.";
  return line.repeat(16);
}

function prohibitedLanguage(username) {
  
 var str1 = "candycorn"
 var str2 = "brusselssprouts"
 
 if (username.search(str1) !== -1) 
 {
    return username.search(str1);
 }
  if (username.search(str2) !== -1) 
  
  { 
    return username.search(str2);
  }
    return -1;
} 
 
 
