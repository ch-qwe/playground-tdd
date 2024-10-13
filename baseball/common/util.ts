export const isValidBallValue = (value: number) => {
  return value >= 1 && value <= 9;
};
export const isValidBallIdx = (value: number) => {
  return value >= 0 && value <= 2;
};

export const genRandomValues = () => {
  const values = new Set<number>();
  while (values.size < 3) {
    [...Math.random().toString()?.split('.')[1]]
      .map(Number)
      ?.filter((v) => v != 0)
      ?.forEach((v) => values.add(v));
  }
  return Array.from(values)?.slice(0, 3);
};
