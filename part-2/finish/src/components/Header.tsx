import Stats from './Stats';
import { Player } from '../types';

interface Props {
  title: string;
  // optional prop
  players?: Player[];
}

// created snippets using https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
const Header = ({ title, players = [] }: Props) => {
  return (
    <header>
      <h1>{title}</h1>

      <Stats players={players} />
    </header>
  );
};

export default Header;
