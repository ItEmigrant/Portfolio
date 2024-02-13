import './App.css';
import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {Skills} from "./loyaut/sections/skills/Skills";
import {Works} from "./loyaut/sections/works/Works";
import {Testimony} from "./loyaut/sections/testimony/testimony";
import {Contact} from "./loyaut/sections/contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
        </div>
    );
}

export default App;


