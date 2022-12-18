
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
import Hosteldet from "./pages/hosteldet/hosteldet";
import Fooddet from "./pages/fooddet/hosteldet";
import Wastedet from "./pages/wastedet/hosteldet";
import Laundrydet from "./pages/laundrydet/hosteldet";
import Profiledet from "./pages/profile/profiledata";
import Profileedit from "./pages/profile/profileedit";
import Profileedits from "./pages/profile/profileedits";




function App() {
  
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
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
          {auth && <Route path="/wastepage" element={<WastePage />} />}
          {auth && <Route path="/hosteldet" element={<Hosteldet />} />}\
             {auth && <Route  path="/fooddet" element={<Fooddet />} />}
            {auth && <Route  path="/wastedet" element={<Wastedet />} />}
          {auth && <Route path="/laundrydet" element={<Laundrydet />} />}
          {auth && <Route path="/profiledet" element={<Profiledet />} />}
          {auth && <Route path="/profileedit" element={<Profileedit />} />}
                    {auth && <Route path="/profileedits" element={<Profileedits />} />}

          

          


          


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


