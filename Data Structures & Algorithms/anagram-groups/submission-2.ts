class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const wordsDict = new Map<string, string[]>();

        for (const word of strs) {
            // Tablica 26 zer na częstotliwości liter
            const count = new Int32Array(26);
            for (let i = 0; i < word.length; i++) {
                count[word.charCodeAt(i) - 97]++;
            }

            // Tworzymy unikalny klucz tekstowy z częstotliwości, np. "1#0#0#2..."
            const key = count.join('#');

            if (!wordsDict.has(key)) {
                wordsDict.set(key, []);
            }
            wordsDict.get(key)!.push(word);
        }

        return Array.from(wordsDict.values());
    }
}