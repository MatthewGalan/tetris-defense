export function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function roundToNearestX(val: number, x: number): number {
  return Math.floor((val + x / 2) / x) * x;
}
