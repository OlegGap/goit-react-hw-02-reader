import React from 'react';
import './styles.css';
import Reader from './Reader/Reader';
import publications from './Reader/publications.json';

function App() {
  return <Reader items={publications} />;
}

export default App;
