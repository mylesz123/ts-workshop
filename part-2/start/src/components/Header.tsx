import Stats from './Stats';

// created snippets using https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// we need a title of type string
// need an array of type Player
const Header = () => {
  return (
    <header>
      <Stats players={[]} />
    </header>
  );
};

export default Header;
