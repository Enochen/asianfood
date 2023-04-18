import capitalize from "capitalize";

export const formatName = (name: string) => {
  // @ts-ignore
  return capitalize.words(name, {
    skipWord: /^(a|the|an|and|or|but|in|on|of|it)$/,
  });
};
