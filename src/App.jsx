import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ContactForm from "./pages/ContactForm.jsx";

export default function App() {
    return (
        <div  className="min-h-screen flex flex-col">
            <BrowserRouter>
                    <Header />

                <Routes>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/services"} element={<Services />}/>
                    <Route path={"/portfolio"} element={<Portfolio />}/>
                    <Route path={"/contact-us"} element={<ContactForm />}/>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
