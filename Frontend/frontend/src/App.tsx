import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgetPwd from "./Pages/ForgetPassword";
import AboutUs from "./Pages/AboutUs";
import ServicesPage from "./Pages/ServicePage";
import PlanEvent from "./Pages/PlanEvent";
import VendorsList from "./Pages/VendorsList";

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/login" element={<SignIn />}></Route>

        <Route path="/forget-password" element={<ForgetPwd />}></Route>

        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/services" element={<ServicesPage />}></Route>

        <Route path="/plan-event" element={<PlanEvent />}></Route>

        <Route path="/vendors" element={<VendorsList />}></Route>

        
      </Routes>
    </Router>
  );
};

export default App;