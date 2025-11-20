import type { SquareT } from "@/types";
import { getNotationFromFileAndRank, RANK_INDEX } from "@/utilities/notations";

export const buildSquares = (ranks = 8, files = 8) => {
  const squares: SquareT[] = [];
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

export const isFirstFile = (file: number) => file === 0;
export const isFirstRank = (rank: number) => rank === RANK_INDEX - 1;
