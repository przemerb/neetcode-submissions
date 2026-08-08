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
            countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
            countMap.set(t[i], (countMap.get(t[i]) || 0) - 1);
        }

        for (const count of countMap.values()) {
            if (count !== 0) return false;
        }
        return true;
    }
}
