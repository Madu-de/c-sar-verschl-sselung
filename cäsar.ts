// By Madu 2022 - GNU Affero General Public License v3.0
class Cäsar {
    static readonly alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü'];
    static readonly defaultKeyValue: number = 3;

    static encodeString(str: string, key?: number): string {
        let encodedStringArray: string[] = [];
        let strArray: string[] = str.toUpperCase().split('');

        strArray.forEach((char: string) => {
            let position: number | undefined = this.getPositionOfCharInAlphabet(char);
            if (position === undefined) return encodedStringArray.push(char);
            position += key || this.defaultKeyValue;
            while (position > this.alphabet.length - 1) {
                position -= this.alphabet.length
            };
            encodedStringArray.push(this.alphabet[position]);
        });
        return encodedStringArray.join('');
    }

    static decodeStringWithKey(str: string, key?: number): string {
        let decodedStringArray: string[] = [];
        let strArray: string[] = str.toUpperCase().split('');

        strArray.forEach((char: string) => {
            let position: number | undefined = this.getPositionOfCharInAlphabet(char);
            if (position === undefined) return decodedStringArray.push(char);
            position -= key || this.defaultKeyValue;
            while (position < 0) {
                position += this.alphabet.length;
            }
            decodedStringArray.push(this.alphabet[position]);
        });
        return decodedStringArray.join('');
    }

    static bruteforceString(str: string): string[] {
        let brutforcedStrings: string[] = [];
        for (let i = 1; i < this.alphabet.length; i++) {
            brutforcedStrings.push(this.decodeStringWithKey(str, i));
        }
        return brutforcedStrings;
    }

    private static getPositionOfCharInAlphabet(char: string): number | undefined {
        for (let i = 0; i < this.alphabet.length; i++) {
            const alphabetChar = this.alphabet[i];
            if (alphabetChar === char) return i;
        }
        return undefined;
    }
}