class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = new Array(26).fill(0);
        const len = s.length;

        for (let i = 0; i < len; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        return count.every(num => num === 0);

        return true;
    }
}