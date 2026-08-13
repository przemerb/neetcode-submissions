class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const czystyString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const list_s: string[] = czystyString.split('');
        const len = list_s.length;

        for (let i=0; i<len/2; i++){
            if (list_s[i] !== list_s[len-1-i]){
                return false;
            }
        }
        return true;

    }
}
