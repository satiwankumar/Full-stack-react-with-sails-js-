import React from 'react';
import ReactDOM from 'react-dom';
import app from '@helpers/app.js';
const App = () => {
  return (
    <div>
    {app('This is my full stack sails app')}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
