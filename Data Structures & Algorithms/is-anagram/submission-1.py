class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        letter_count_s = {}
        letter_count_t = {}
        for letter in s:
            if letter not in letter_count_s:
                letter_count_s[letter] = 1
            else:
                letter_count_s[letter] += 1
        for letter in t:
            if letter not in letter_count_t:
                letter_count_t[letter] = 1
            else:
                letter_count_t[letter] += 1
        return letter_count_s == letter_count_t
