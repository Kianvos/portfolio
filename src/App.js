import './App.css';
import Homepage from "./assets/components/Homepage/homepage";
import {useEffect, useRef, useState} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import CV from "./assets/components/CV/cv";
import './assets/components/app.css';

function App() {
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
                    <Route path="*" element={<p>404, pagina bestaat niet.</p>}/>
                </Routes>
            </div>
        </Router>

    );
}

export default App;
