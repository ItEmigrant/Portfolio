import './App.css';
import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {Skills} from "./loyaut/sections/skills/Skills";
import {Works} from "./loyaut/sections/works/Works";
import {Testimony} from "./loyaut/sections/testimony/testimony";
import {Contact} from "./loyaut/sections/contacts/Contacts";
import {Slogan} from "./loyaut/sections/slogan/Slogan";
import {Footer} from "./loyaut/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;


