// defining the "shape" of our Player type
// read more here: https://www.typescriptlang.org/docs/handbook/2/objects.html 👀
interface Player {
  name: string;
  score: number;
  id: number;
}

// we can start by creating an array of strings for who we want our initial players to be
// we can infer types here
// const initialPlayers = [1, 'alisa', 'random'];
const initialPlayers = ['myles', 'alisa', 'random'];

/**
 * This method is just a helper so we don't have to manually create a whole bunch of player objects
 * creates and array of Player objects to fill our players array
 */
const generatePlayers = (playersArray: string[]): Player[] => {
  // hover over values and typescript gives us what we need

  // we could also specify the type for this declaration to Player[] to make the hover state a bit cleaner
  const generatedPlayers = playersArray.map((player, index) => ({
    id: index + 1,
    name: player,
    score: 0,
  }));

  return generatedPlayers;
};

// since we defined our Player type, when we start to populate out players array with player object, typescript tells up which properties to add, and their types
// once we satisfy all that information then we ditch out ts compiler errors!
const players: Player[] = generatePlayers(initialPlayers);

console.log({ players });

// export {}
