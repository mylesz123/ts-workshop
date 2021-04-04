// the good thing about installing @types/react is that we get access to very handy types;
import { FormEvent, useState } from 'react';

interface Props {
  addNewPlayer(name: string): void;
}

const AddPlayerForm = ({ addNewPlayer }: Props) => {
  // initial type here must be a string
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name) {
      return;
    }
    addNewPlayer(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* this input needs to handle our data */}
      <input
        type="text"
        value={name}
        placeholder="Enter a players name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
