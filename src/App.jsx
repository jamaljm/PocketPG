
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/Signup/Login";
import SignupPage from "./pages/Signup/Signin";
import Home from "./pages/home/Home";
import React from "react";
import "./app.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { Dashboard } from "@material-ui/icons";
import Topbar from "./components/topbar/topbar";
import FoodPage from "./pages/foodpage/foodpage";
import LaundryPage from "./pages/laundrypage/laundrypage";
import WastePage from "./pages/wastepage/wastepage";



function App() {
  
  const [auth, setAuth] = useState(
    true || window.localStorage.getItem("auth") === "true"
  );

  const navigate = useNavigate();




  return (
    <>
      <div className="App">
     
          {auth && <Topbar />}
          <Routes>
            {/* <Route path="/*" element={<Landingpage />} /> */}
          {auth && <Route path="/home" element={<Home />} />}
          {auth && <Route path="/foodpage" element={<FoodPage />} />}
          {auth && <Route path="/laundrypage" element={<LaundryPage />} />}
            {auth && <Route  path="/wastepage" element={<WastePage />} />}


            {!auth ? (
              <Route exact path="/" element={<SignupPage />} />
            ) : (
              <Route exact path="/" element={<Home />} />
            )}

            {}
            {!auth && <Route  path="/login" element={<Login />} />}
            
          </Routes>
        </div>
    </>

  );
}
export default App;


