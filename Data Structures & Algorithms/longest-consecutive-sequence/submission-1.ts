class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const numSet = new Set(nums);
        let maxCount = 0;

        for (const num of nums) {
            // Jeśli liczba została już usunięta przy poprzednich ciągach, pomijamy ją
            if (!numSet.has(num)) continue;

            // Usuwamy bieżącą liczbę i zaczynamy zliczanie od 1
            numSet.delete(num);
            let count = 1;

            // 1. Rozwijamy ciąg w dół (mniejsze liczby)
            let left = num - 1;
            while (numSet.has(left)) {
                numSet.delete(left);
                count++;
                left--;
            }

            // 2. Rozwijamy ciąg w górę (większe liczby)
            let right = num + 1;
            while (numSet.has(right)) {
                numSet.delete(right);
                count++;
                right++;
            }

            // Zapisujemy najdłuższy dotychczasowy ciąg
            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}