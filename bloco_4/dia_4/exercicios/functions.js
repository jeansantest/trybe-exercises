function verifyPalindrome(word) {
  let palindrome = '';
  for(let index = word.length - 1; index >= 0; index -= 1) {
    palindrome += word[index]
  }
  if(palindrome === word) {
    return true
  } else {
    return false
  }
}

console.log(verifyPalindrome('arara'))

