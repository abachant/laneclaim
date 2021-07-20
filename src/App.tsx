import React, { FC } from 'react';
import Nav from './components/Nav';

const App: FC = () => {
  const foo: string = 'asdf';
  return (
    <div id="app" className="container">
      <Nav />
      <div id="map" />
    </div>
  );
};

export default App;
