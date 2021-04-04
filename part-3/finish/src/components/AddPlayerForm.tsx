import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  addNewPlayer(name: string): void;
}

const AddPlayerForm = ({ addNewPlayer }: Props) => {
  const [name, setName] = useState('');

  // setting our type to "any" will get rid of most compilation errors, but should be used sparingly because it
  // reduces our type safety, so we cannot guarantee the code will work until runtime
  const handleValueChange = (
    // event: any
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    // hover over value and see its type
    const { value } = event.target;
    setName(value);
    // typescript knows that setName requires a string since we provided our initial state value to be a string
    // setName(1);
  };

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
      <input
        type="text"
        value={name}
        onChange={handleValueChange}
        placeholder="Enter a players name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
