function isPalindrome(str, startIndex, endIndex) {
  if (endIndex === undefined) {
    startIndex = 0;
    endIndex = str.length-1;
  }
  if (startIndex > endIndex) return true;
  let test = str[startIndex] != str[endIndex];
  if (test) return false;
	return isPalindrome(str,startIndex+1,endIndex-1);
}

const str = "abbaa";
const result = isPalindrome(str);
console.log(result);
