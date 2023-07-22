import Creative from "./components/creative/creative";
import Header from "./components/header/header";
import Wedo from "./components/wedo/wedo";
import Card from "./components/weflex/card";
import About from "./components/about/about";
import Wehave from "./components/wehave/wehave";
import Dashboard from "./components/dashboard/dashboard";
import State from "./components/state/state";
import Arrayp from "./components/array/arrayp"
import Todo from "./components/todolist/todo"
import Exampchild from "./components/example/exampchild";
import LoadData from "./components/ServerExample/ServerExample";
import Page from "./components/Page/Page";
import BasicComponent from "./components/basicsofclass/BasicClass";
import Home from "./components/routing/Home";
import Contact from "./components/routing/Contact";
import Aboutt from "./components/routing/About";

import { BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Counter from "./redux/counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import Reg from "./components/Lookby/Reg";

function App() {
  return (
    <>
      <Reg/>
      {/* <Header/> */}
      {/* <Creative/>
      <Wedo/>
      <About/>
      <Wehave/>
      <Dashboard/> */}
      {/* <State/> */}
       {/* <Arrayp/> */}
       {/* <Exampchild/> */}
        {/* <Todo /> */}
        {/* <LoadData/> */}
        {/* <Page/> */}
        {/* <BasicComponent /> */}
       
       
       {/* <Provider  store={store}>
        <BrowserRouter>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/counter'>Counter</Link>
        <Routes>
          <Route path="/home" element={ <Home />}></Route>
          <Route path="/about" element={  <Aboutt />}></Route>
          <Route path="/contact" element={ <Contact />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
        </BrowserRouter>
        </Provider> */}

      </>
      )
  
  
}
      export default App;