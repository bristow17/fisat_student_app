import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddStudent } from './components/AddStudent';
import HomePage from './components/HomePage';
import DeleteStudent from './components/DeleteStudent';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddStudent/>}/>
      <Route path='/delete' element={<DeleteStudent/>}/>
      <Route path='/search' element={<SearchStudent/>}/>
      <Route path='/view' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>


  );
}

export default App;
