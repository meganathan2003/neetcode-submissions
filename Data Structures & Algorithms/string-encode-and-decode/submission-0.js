class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (let str of strs) {
            encodedStr += str.length + "#" + str;
        }

        return encodedStr;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++; // Find the delimiter
            
            let length = parseInt(str.substring(i, j)); // Extract length
            i = j + 1; // Move past `#`
            
            let word = str.substring(i, i + length); // Extract word
            decoded.push(word);
            
            i += length; // Move to next encoded part
        }

        return decoded;
    }
}

