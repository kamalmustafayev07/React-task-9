import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Works from "./components/Works";
import "./App.css";
import {Route,Routes} from "react-router-dom";

function App(){
   return(
        <>
            <Header/>
            <Routes element={<Header/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/works" element={<Works/>}/>
            </Routes>
        </>
    )
}

export default App;