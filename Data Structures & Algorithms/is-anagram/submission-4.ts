class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length === t.length){
            const sorted_s = s.split('').sort().join('');
            const sorted_t = t.split('').sort().join('');

            return sorted_s === sorted_t;
        }else{
            return false;
        }
    }
}
