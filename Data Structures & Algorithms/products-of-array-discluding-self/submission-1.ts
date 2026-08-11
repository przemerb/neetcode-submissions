class Solution {
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = new Array(nums.length);

        // 1. Zbieramy iloczyny z LEWEJ strony (od lewej do prawej)
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // 2. Mnożymy przez iloczyny z PRAWEJ strony (od prawej do lewej)
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}