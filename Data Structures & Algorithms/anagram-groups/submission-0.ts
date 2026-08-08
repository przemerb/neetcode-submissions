class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const words_dict: Map<string,string[]> = new Map();

        for (const word of strs){
            const sorted_word = word.split('').sort().join('');

            if (!words_dict.has(sorted_word)) {
                words_dict.set(sorted_word, []);
            }

            words_dict.get(sorted_word)!.push(word);
        }

        return Array.from(words_dict.values());
    }
}
