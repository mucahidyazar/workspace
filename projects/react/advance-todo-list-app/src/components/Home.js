import React from 'react';
import './Home.scss';

import TodoHeader from './TodoHeader/TodoHeader';
import TodoMenu from './TodoMenu/TodoMenu';

function Home() {
  return (
    <div className="Home">
      <TodoHeader />
      <TodoMenu />
    </div>
  );
}

export default Home;
