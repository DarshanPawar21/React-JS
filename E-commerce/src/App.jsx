import { Route, Routes } from 'react-router';
import Home from './component/home/home';
import Nev from './component/Nev/Nev';
import Card from './component/card/card';
const App = () => {
  return (<>
    <div>
      <Nev />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </div>
  </>)
}
export default App;