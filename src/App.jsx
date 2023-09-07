import './App.css'
import {Route, Routes} from "react-router-dom";
import UserForm from "./page/UserForm/index.jsx";
import Nav from "./component/Nav/index.jsx";
import UserList from "./page/UserList/index.jsx";
import HorseList from "./page/HorseList/index.jsx";
import HorseForm from "./page/HorseForm/index.jsx";
import AddCouple from "./page/AddCouple/index.jsx";

function App() {

  return (
    <>
        <Nav/>
        <Routes>
            <Route path={'/'} element={<UserForm/>}/>
            <Route path={'/userList'} element={<UserList />} />
            <Route path={'/horseList'} element={<HorseList />} />
            <Route path={'/horseForm'} element={<HorseForm />} />
            <Route path={'/addCouple'} element={<AddCouple />} />
        </Routes>
    </>
  )
}

export default App
