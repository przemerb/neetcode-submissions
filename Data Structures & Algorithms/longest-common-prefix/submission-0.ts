class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (!strs || strs.length === 0) return "";

        // Przechodzimy znak po znaku po pierwszym słowie
        for (let i = 0; i < strs[0].length; i++) {
            const char = strs[0][i];

            // Sprawdzamy ten sam indeks we wszystkich pozostałych słowach
            for (let j = 1; j < strs.length; j++) {
                // Warunek 1: indeks przekracza długość obecnego słowa
                // Warunek 2: znak na pozycji i się nie zgadza
                if (i === strs[j].length || strs[j][i] !== char) {
                    return strs[0].slice(0, i);
                }
            }
        }

        // Jeśli cała pętla się zakończyła, pierwsze słowo w całości jest prefiksem
        return strs[0];
    }
}