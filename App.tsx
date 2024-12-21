 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Problems from "./components/Problems";
import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import Contest from "./components/Contest";
function App() {

  return <>
   <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Problems/>}/>
       <Route path="/problem/:pid" element={<Problem/>}/>
       <Route path="/contests" element={<Contest/>}/>
     </Routes>
   </BrowserRouter>
  </>;
}

export default App;
