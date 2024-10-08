import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App =()=>{

  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#00FFFF'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key={""} pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" key={"entertainment"} element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key={"health"}pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey}  key={"science"} pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={pageSize} country="in" category="sports"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }

export default App;
