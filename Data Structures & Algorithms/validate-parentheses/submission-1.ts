class Solution {
    isValid(s: string): boolean {
        // 1. Jeśli długość jest nieparzysta, ciąg NIE MOŻE być poprawny
        if (s.length % 2 !== 0) {
            return false;
        }

        const stack: string[] = [];
        
        // Mapa par: klucz to nawias zamykający, wartość to odpowiadający mu otwierający
        const bracketsMap: Record<string, string> = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const char of s) {
            // Jeśli znak jest w mapie jako klucz -> to jest to nawias ZAMYKAJĄCY
            if (char in bracketsMap) {
                // Ściągamy ze stosu ostatnio otwarty nawias
                const topElement = stack.pop();

                // Jeśli stos był pusty LUB ostatni nawias nie pasuje -> błąd!
                if (topElement !== bracketsMap[char]) {
                    return false;
                }
            } else {
                // Jeśli to nawias OTWIERAJĄCY -> wrzucamy go na stos
                stack.push(char);
            }
        }

        // Jeśli na końcu stos jest pusty, to znaczy że wszystkie nawiasy zostały idealnie domknięte
        return stack.length === 0;
    }
}