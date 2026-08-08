class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        // 1. Zliczanie częstotliwości występowania każdej liczby
        const countMap = new Map<number, number>();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // 2. Tworzenie kubełków (indeks = liczba wystąpień)
        // Rozmiar nums.length + 1, bo element może wystąpić maksymalnie nums.length razy
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of countMap.entries()) {
            buckets[count].push(num);
        }

        // 3. Zbieranie k najczęstszych elementów od końca (największych częstotliwości)
        const result: number[] = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}