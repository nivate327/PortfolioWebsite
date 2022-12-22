import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Router/Home';
import About from './Router/About';
import MainHeader from './MainHeader';
import Mycontact from './Router/Mycontact';
import {useGlobalContext} from "./Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Mycontact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
