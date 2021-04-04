import { Player } from './types';
/**
 * Dynamically creates an array of Player objects
 */
export const generatePlayers = (playersArray: string[]): Player[] => {
  const generatedPlayers = playersArray.map((player, index) => ({
    id: index + 1,
    name: player,
    score: 0,
  }));

  return generatedPlayers;
};
