import { getNotationFromFileAndRank } from "@/utilities/notations";

export const buildSquares = ({
  ranks,
  files,
}: {
  ranks: number;
  files: number;
}) => {
  const squares: { notation: string; rank: number; file: number }[] = [];
  for (let rank = 0; rank < ranks; rank++) {
    for (let file = 0; file < files; file++) {
      squares.push(getNotationFromFileAndRank({ file, rank }));
    }
  }
  return squares;
};

export const isSquareDark = ({
  file,
  rank,
}: {
  file: number;
  rank: number;
}) => {
  return (file + rank) % 2 === 1;
};
