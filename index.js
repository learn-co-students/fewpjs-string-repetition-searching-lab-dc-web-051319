// Code your solution here

const myRegExp = /brusselssprouts|candycorn/;

let heyJude = function() {
    return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

let prohibitedLanguage = function(str) {
    return str.search(myRegExp)
}
