import './App.css';
import Homepage from "./assets/components/Homepage/homepage";
import Header from "./assets/components/default/header";
import {useEffect, useRef, useState} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import CV from "./assets/components/CV/cv";


function App() {
    const ref = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > ref.current.offsetTop) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
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
                <Header isScrolled={isScrolled}/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/CV" element={<CV/>}/>
                    <Route path="*" element={<p>404, pagina bestaat niet.</p>}/>
                </Routes>
            </div>
        </Router>

    );
}

export default App;
