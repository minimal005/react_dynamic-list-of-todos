import React from 'react';

import { Todo } from '../../types/Todo';

import { TodoOne } from '../Todo/Todo';

type Props = {
  todos: Todo[];

  handleClick: (todo: Todo) => void;
};

export const TodoList: React.FC<Props> = ({ todos, handleClick }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo: Todo) => (
          <TodoOne key={todo.id} todo={todo} handleClick={handleClick} />
        ))}
      </tbody>
    </table>
  );
};
