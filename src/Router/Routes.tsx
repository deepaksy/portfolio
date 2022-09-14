import { 
    Routes as SiteRoutes,
    Route
 } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Test from "../pages/Test";

const Routes = () => {
  return (
    <SiteRoutes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/test" element={<Test/>}/>
    </SiteRoutes>
  )
}

export default Routes