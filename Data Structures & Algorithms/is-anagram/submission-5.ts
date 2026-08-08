class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const countMap: Map<string, number> =  new Map();
        
        if (s.length !== t.length) return false;
        
        for (let i=0; i<s.length; i++){
            if (countMap.get(s[i]) === undefined){
                countMap.set(s[i], 1);
            } else {
                const count = countMap.get(s[i])!;
                countMap.set(s[i], count+1);
            }

            if (countMap.get(t[i]) === undefined){
                countMap.set(t[i], -1);
            } else {
                const count = countMap.get(t[i])!;
                countMap.set(t[i], count-1);
            }
        }

        for (const count of countMap.values()) {
            if (count !== 0) return false;
        }
        return true;
    }
}
