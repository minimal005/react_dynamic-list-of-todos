import { Todo } from '../types/Todo';

export const filterTodosByRule = (todos: Todo[], rule: string): Todo[] => {
  if (rule === 'all') {
    return todos;
  }

  if (rule === 'active') {
    return todos.filter((todo: Todo) => !todo.completed);
  }

  if (rule === 'completed') {
    return todos.filter((todo: Todo) => todo.completed);
  }

  return todos;
};
