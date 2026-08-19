class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length-1;
        let result = 0;
        let pole = 0;

        while (left !== right){
            const min = Math.min(heights[left],heights[right])
            pole = min*(right-left)
            if (pole>result){
                result=pole;
            }
            if(heights[left]>heights[right]){
                right--;
            }
            else{
                left++;
            }
        }
        return result;
    }
}
