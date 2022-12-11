import React from 'react';
import DisplayTableEngineering from './components/DisplayTableEngineering';
import  Home  from './components/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import DisplayTableMedical from './components/DisplayTableMedical';
import DisplayTableLaw from './components/DisplayTableLaw';
import DisplayTableAccountancy from './components/DisplayTableAccountancy';
import DisplayTableBanking from './components/DisplayTableBanking';
import DisplayTableJournalism from './components/DisplayTableJournalism';
import DisplayTableUnique from './components/DisplayTableUnique';
import Aboutus from './components/aboutus';

export default function App() {
  return (
    <Router>
      <Routes className='body'>
        <Route path='/' element={<Home/>} />
        <Route path='/DisplayTableEngineering' element={<DisplayTableEngineering />} />
        <Route path='/DisplayTableMedical' element={<DisplayTableMedical />} />
        <Route path='/DisplayTableLaw' element={<DisplayTableLaw />} />
        <Route path='/DisplayTableAccountancy' element={<DisplayTableAccountancy />} />
        <Route path='/DisplayTableBanking' element={<DisplayTableBanking />} />
        <Route path='/DisplayTableJournalism' element={<DisplayTableJournalism />} />
        <Route path='/DisplayTableUnique' element={<DisplayTableUnique />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </Router>
    
  );
}
