import { Routes ,Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import "./style.scss"

function App() {
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
