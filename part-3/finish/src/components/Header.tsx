import Stats from './Stats';
import { Player } from '../types';
import StopWatch from './StopWatch';

interface Props {
  title: string;
  // optional prop
  players?: Player[];
}

// created snippets using https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
const Header = ({ title, players = [] }: Props) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
};

export default Header;
