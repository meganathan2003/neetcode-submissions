class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {


        if (!nums.length) {
            return false;
        }

        const setNums = new Set(nums);

        return setNums.size !== nums.length;

    }
}
