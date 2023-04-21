import './App.css';
import Homepage from "./assets/components/Homepage/homepage";
import Header from "./assets/components/Homepage/default/header";
import {useEffect, useRef, useState} from "react";


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
        <div className="App" ref={ref}>
            <Header isScrolled={isScrolled}/>
            <Homepage/>
        </div>
    );
}

export default App;
