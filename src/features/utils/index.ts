export const firstLetterCapitalize = (string: string): string => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice((i * size), (i * size) + size));
  }

  return result;
};

export const mathPercent = (to: number, from: number): number => {
  return Math.floor((to / from) * 100);
};

export const declOfNum = (number: number, titles: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}