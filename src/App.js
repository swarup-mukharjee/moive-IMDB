
import Home from './page/home/home';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App';
import Header from "./components/header/Header";
import MovieList from '../src/components/movieList/movieList';


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieList/>}></Route>
        <Route path="movie/:type" element={<h1>welcome</h1>}></Route>
        <Route path="/*" element={<h1>error</h1>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
