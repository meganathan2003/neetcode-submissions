class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (!nums.length || k < 0) {
            return [];
        }

        let freqNum = {};


        for (let num of nums) {
            freqNum[num] = (freqNum[num] || 0) + 1;
        }

        let sortedByValueDesc = (Object.entries(freqNum).sort((a, b) => b[1] - a[1]));

        // console.log(sortedByValueDesc[0][0]);
        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(Number(sortedByValueDesc[i][0]));
        }
        return res;

    }
}
