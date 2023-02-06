import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import { originalUrl,actionUrl,romanceUrl } from './Components/Constants/Url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost Title="Netflix Originals" url={originalUrl}/>
      <Rowpost Title="Action Movies"  url={actionUrl} isSmall/>
      <Rowpost Title="Romance Movies"  url={romanceUrl} isSmall/>
    </div>
  );
}

export default App;
