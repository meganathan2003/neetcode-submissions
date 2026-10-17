class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (!s.length || !t.length || s.length !== t.length) {
            return false;

        }


        // Create a hashmap 
        const map = {};
      

        // Loop through the first string
        for (let char of s) {
            map[char] = (map[char] || 0) + 1;
        }

        for (let char of t) {
            if (!map[char]) {
                return false;
            }
            map[char] -= 1;
        }
        return true;

    }
}
