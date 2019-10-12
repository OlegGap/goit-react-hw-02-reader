import React from 'react';
import './styles.css';
import Reader from '../Reader/Reader';
import publications from '../../DB/publications.json';

const App = () => <Reader items={publications} />;

export default App;
