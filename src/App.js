import './App.css';
import {useEffect, useRef, useState} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Homepage from "./assets/components/Homepage/homepage";
import CV from "./assets/components/CV/cv";
import Contact from "./assets/components/Contact/contact";
import './assets/components/app.css';
import Projects from "./assets/components/Projects/projects";
// import dotenv from "dotenv";

function App() {
    // dotenv.config()

    const ref = useRef(null);
    const [isFullPageScrolled, setFullPageScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > ref.current.offsetTop){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            if (currentScrollPos > ref.current.offsetTop + window.innerHeight-80) {
                setFullPageScrolled(true);
            } else {
                setFullPageScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Router>
            <div className="App" ref={ref}>
                <Routes>
                    <Route path="/" element={<Homepage isFullPageScrolled={isFullPageScrolled} isScrolled={isScrolled}/>}/>
                    <Route path="/CV" element={<CV/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="*" element={<p>404, pagina bestaat niet.</p>}/>
                </Routes>
            </div>
        </Router>

    );
}

export default App;
