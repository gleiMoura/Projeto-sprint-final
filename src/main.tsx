import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home';
import Problem from './templates/Problem';
import Project from './templates/Project';
import Trip from './templates/Trip';
import Data from './templates/Data';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Problem />
    <Project />
    <Trip />
    <Data />
  </React.StrictMode>,
)
