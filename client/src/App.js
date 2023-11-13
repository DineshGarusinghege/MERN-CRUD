import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;


