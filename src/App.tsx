import React, { useEffect, useState } from 'react';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';

import { getTodos } from './api';
import { filterTodosByRule } from './services/service';

import { Todo } from './types/Todo';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState<string>('');
  const [rule, setRule] = useState('all');

  const [isLoading, setIsLoading] = useState(true);
  const [isModalLoading, setIsModalLoading] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    getTodos()
      .then(res =>
        res.filter(todo =>
          todo.title.toLowerCase().includes(query?.toLowerCase()),
        ),
      )
      .then(res => filterTodosByRule(res, rule))
      .then(setTodos)
      .finally(() => setIsLoading(false));
  }, [query, rule]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                query={query}
                rule={rule}
                setQuery={setQuery}
                chooseRule={setRule}
              />
            </div>

            <div className="block">
              {isLoading && <Loader />}
              {!isLoading && (
                <TodoList
                  todos={todos}
                  modalLoading={setIsModalLoading}
                  getUser={setSelectedUserId}
                  selectedTodo={setSelectedTodo}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalLoading && (
        <TodoModal
          modalLoading={setIsModalLoading}
          currentTodo={selectedTodo}
          selectedUserId={selectedUserId}
        />
      )}
    </>
  );
};
