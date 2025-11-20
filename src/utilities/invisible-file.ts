// I can't make invisible files, but easter eggs suppose to be secrets...
export const openingMessages = {
  vienna: {
    title: "Vienna Game",
    message:
      "Even though my first ever opening was London System, I consider Vienna my first favourite opening for white!",
  },
  caro: {
    title: "Caro-Kann Defense",
    message:
      "My first opening for black against e4. Not the most exciting one, but, as it is well known, quiet solid when you know common ideas.",
  },
  kid: {
    title: "King's Indian Defense",
    message:
      "My recently highly considered opening against d4. I have started playing it recently and it has been a blast!",
  },
};

export const viennaGame = ["e2", "e4", "e7", "e5", "b1", "c3"];
export const caroKann = ["e2", "e4", "c7", "c6"];
export const kid = ["d2", "d4", "g8", "f6", "c2", "c4", "g7", "g6"];

export type OpeningMessageT = keyof typeof openingMessages;
