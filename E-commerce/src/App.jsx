import { Route, Routes } from 'react-router';
import Home from './component/home/home';
import Nev from './component/Nev/Nev'; // Aapka Navbar component
import Card from './component/card/card';
import View from './component/View/View';

const App = () => {
  return (
    <>
      <div>
        <Nev /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/view" element={<View />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;