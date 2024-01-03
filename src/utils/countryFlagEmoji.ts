function getRegionalIndicatorSymbol(letter: string): string {
    return String.fromCodePoint(0x1F1E6 - 65 + letter.toUpperCase().charCodeAt(0));
}

export function countryFlagEmoji(countryCode: string) {
    const symbol1 = getRegionalIndicatorSymbol(countryCode[0]);
    const symbol2 = getRegionalIndicatorSymbol(countryCode[1]);

    return symbol1 + symbol2;
}
