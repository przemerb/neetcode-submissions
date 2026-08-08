class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();

        // 1. Zliczanie częstotliwości
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // 2. Sortowanie kluczy wg częstotliwości i wycięcie k elementów
        return Array.from(countMap.keys())
            .sort((a, b) => countMap.get(b)! - countMap.get(a)!)
            .slice(0, k);
    }
}