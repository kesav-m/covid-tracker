const ALPHABET = /[^a-zA-Z ]/g;

export const NonDigit = value => {
  return value.replace(ALPHABET, "").trim();
};
