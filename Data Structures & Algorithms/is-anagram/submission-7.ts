class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        // Tworzymy sztywną tablicę 26 zer odpowiadających literom a-z
        const count = new Int32Array(26);

        for (let i = 0; i < s.length; i++) {
            // s.charCodeAt(i) - 97 sprowadza kod 'a' (97) do indeksu 0
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        for (let i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }

        return true;
    }
}
