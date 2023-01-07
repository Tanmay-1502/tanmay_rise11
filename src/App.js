import React from 'react'
import Bottom from './components/Bottom';
import Header from './components/Header';
import Middle from './components/Middle';

function App() {
  return (
    <div className="max-h-screen sm:overflow-hidden">
      <Header/>
      <Middle/>
      <Bottom/>

      
    </div>
  );
}

export default App;
