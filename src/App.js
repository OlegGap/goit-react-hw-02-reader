import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import Reader from './components/Reader/Reader';
import publications from './components/Reader/publications.json';

function App({ location }) {
  const correctQueryString = () => {
    const curentItem = queryString.parse(location.search).item;
    return (
      Number(curentItem) && curentItem >= 1 && curentItem <= publications.length
    );
  };
  return (
    <Switch>
      <Route path="/reader">
        {correctQueryString() ? (
          <Reader location={location} items={publications} />
        ) : (
          <Redirect to="/reader?item=1" />
        )}
      </Route>

      <Route>
        <Redirect to="/reader" />
      </Route>
    </Switch>
  );
}
App.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
