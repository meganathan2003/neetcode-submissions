class Solution {
    /**
        * @param {string} s
        * @return {boolean}
        */
    // create a method to check if a string is a palindrome
    isPalindrome(s) {

        let str = s.toLowerCase().trim();

        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (!this.isPalindromeChar(str[left])) {
                left++;
            }
            else if (!this.isPalindromeChar(str[right])) {
                right--;
            }
            else {
                if (str[left] !== str[right]) {
                    return false;
                }
                left++;
                right--;
            }
        }
        return true;
    }
    isPalindromeChar(c) {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}