// eslint-disable-next-line import/prefer-default-export
export const random = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
