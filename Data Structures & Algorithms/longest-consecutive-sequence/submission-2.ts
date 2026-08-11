class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        // add every number to a set in O(n)
        const f = new Set<number>(nums);

        // find the indexes where there isn't the preceding number in the sequence
        let longest: number = 1;
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if (!f.has(n-1)) {
                let thisN: number = n;
                let thisRun: number = 1;
                while(f.has(1 + thisN++)) {
                    thisRun++;
                }
                if (thisRun > longest) {
                    longest = thisRun;
                }
            }
        }
        return longest;
    }
}
