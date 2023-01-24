export const firstLetterCapitalize = (string: string): string => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export const chunkArray = (arr: any[], size: number): any[][] => {
    const result = [];

    for (let i = 0; i < Math.ceil(arr.length/size); i++) {
        result.push(arr.slice((i * size), (i * size) + size));
    }

    return result;
}

export const mathPercent = (to: number, from: number): number => {
    return Math.floor((to / from) * 100)
}