class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const wordsDict = new Map<string, string[]>();

        for (const word of strs) {
            const count = new Array(26).fill(0);
            
            for (let i = 0; i < word.length; i++) {
                count[word.charCodeAt(i) - 97]++;
            }

            // Tworzymy ultrakrótki, 26-znakowy klucz z surowych kodów ASCII
            const key = String.fromCharCode(...count);

            if (!wordsDict.has(key)) {
                wordsDict.set(key, []);
            }
            wordsDict.get(key)!.push(word);
        }

        return Array.from(wordsDict.values());
    }
}