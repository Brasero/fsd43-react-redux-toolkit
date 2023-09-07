import './App.css'
import {Route, Routes} from "react-router-dom";
import UserForm from "./page/UserForm/index.jsx";
import Nav from "./component/Nav/index.jsx";
import UserList from "./page/UserList/index.jsx";

function App() {

  return (
    <>
        <Nav/>
        <Routes>
            <Route path={'/'} element={<UserForm/>}/>
            <Route path={'/userList'} element={<UserList />} />
        </Routes>
    </>
  )
}

export default App
