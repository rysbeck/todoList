import { Routes ,Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import "./style.scss"
import { useEffect } from "react";
import { useContext } from "react";
import { CustomContext } from "./pages/utils/Context";

function App() {
  const {setUser} = useContext(CustomContext)
  useEffect(()=>{
    if(localStorage.getItem('user')!==null){
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  },[setUser]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
