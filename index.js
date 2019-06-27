// Code your solution here

function heyJude() {
    let str = "Na na na na na na na, na na na na, hey Jude."
    return str.repeat(16);
}

function prohibitedLanguage(str) {
    let prohibited = /candycorn|brusselssprouts/;
    return str.search(prohibited);
}