import React ,{useState}from 'react';
import Navabar from './Components/Navabar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


 const App=()=>  {

  const pageSize  = 5;
  
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState("primary")

  const toggle=()=>{
    if(mode==="primary"){
      setMode("dark")
      document.body.style.backgroundColor ="black"
    }else{
      setMode("primary");
      document.body.style.backgroundColor ="white"

    }
  }


    return <BrowserRouter>
    <div>
    <LoadingBar
        color='#f11946'
        progress={progress}
      /></div>
    <Navabar mode={mode} toggle={toggle}/>
      <Routes>
        <Route excat path='/' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'general'} mode={mode} /> } ></Route>
      </Routes>
      <Routes>
        <Route excat path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'business'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/entertainment' element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'entertainment'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'general'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/generalhealth' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'generalhealth'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'science'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'sports'} mode={mode}  />}></Route>
      </Routes>
      <Routes>
        <Route excat path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'technology'} mode={mode}  />}></Route>
      </Routes>
      
    </BrowserRouter>
  
}

export default App;