import React from 'react';

type Props = {
  query: string;
  rule: string;
  setQuery: (v: string) => void;
  chooseRule: (v: string) => void;
};

export const TodoFilter: React.FC<Props> = ({
  query,
  rule,
  setQuery,
  chooseRule,
}) => {
  const reset = () => {
    chooseRule('all');
    setQuery('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={rule}
            onChange={event => chooseRule(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input"
          placeholder="Search..."
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={reset}
            />
          )}
        </span>
      </p>
    </form>
  );
};
