const heyJude = verse => verse.repeat(16)

const prohibitedLanguage = string => {
    let bannedWords = /candycorn|brusselssprouts/
    return string.search(bannedWords)
}
