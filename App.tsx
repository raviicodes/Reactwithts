 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Problems from "./components/Problems";
function App() {

  return <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Problems/>}/>
     </Routes>
   </BrowserRouter>
  </>;
}

export default App;
