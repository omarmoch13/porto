import logo from './logo.svg';
import './App.css';

import Topbar from './component/topbar/Topbar';
import Intro from './component/intro/Intro';
import Works from './component/works/Works';
import Portofolio from './component/portofolio/Portofolio';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portofolio/>
        <Works/>
      </div>
      
    </div>
  );
}

export default App;
