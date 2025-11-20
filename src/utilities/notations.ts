export const UNICODE_LETTERS_START = 97; // In unicode letters start from 97 - which is "a";
export const RANK_INDEX = 8;

export const getNotationFromFileAndRank = ({
  file,
  rank,
}: {
  file: number;
  rank: number;
}) => {
  const actualRank = RANK_INDEX - rank;
  const actualFile = file;
  const notation = `${String.fromCharCode(UNICODE_LETTERS_START + actualFile)}${actualRank}`;

  return {
    notation,
    rank,
    file,
  };
};
