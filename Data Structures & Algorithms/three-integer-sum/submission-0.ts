class Solution {
    threeSum(nums: number[]): number[][] {
        // 1. Sortowanie numeryczne tablicy O(n log n)
        nums.sort((a, b) => a - b);
        const result: number[][] = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // Wczesne wyjście: jeśli najmniejsza liczba > 0, suma nigdy nie da 0
            if (nums[i] > 0) break;

            // Omijanie duplikatów dla pierwszej liczby (i)
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // 2. Inicjalizacja Two Pointers dla każdego nowego i
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Omijanie duplikatów dla left
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Omijanie duplikatów dla right
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    // Suma za mała -> przesuwamy lewy wskaźnik na większe liczby
                    left++;
                } else {
                    // Suma za duża -> przesuwamy prawy wskaźnik na mniejsze liczby
                    right--;
                }
            }
        }

        return result;
    }
}