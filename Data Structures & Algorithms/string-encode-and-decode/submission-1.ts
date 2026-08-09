class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result: string[] = [];

        for(const str of strs){
            result.push(str.length + '#' + str)
        }

        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            const length = parseInt(str.slice(i, j));

            const word = str.slice(j + 1, j + 1 + length);
            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}
