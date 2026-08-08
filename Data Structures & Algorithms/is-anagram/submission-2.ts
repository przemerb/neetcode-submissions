class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sorted_s = s.split('').sort().join('')
        const sorted_t = t.split('').sort().join('')

        if (sorted_s === sorted_t){
            return true;
        } else {
            return false;
        }
    }
}
