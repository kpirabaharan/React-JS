import { ReactNode } from 'react';

import Todo from '../models/todo';

type AppProps = {
  items: Todo[];
  children?: ReactNode;
};

const Todos = ({ items }: AppProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
