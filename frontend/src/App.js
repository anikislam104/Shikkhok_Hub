import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/JS_files/navbar";
import SignUp from './components/JS_files/sign_up';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <br/>
            <Routes>
                <Route path="/sign_up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
