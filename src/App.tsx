import './App.css';
import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {Skills} from "./loyaut/sections/skills/Skills";
import {Works} from "./loyaut/sections/works/Works";
import {Testimony} from "./loyaut/sections/testimony/testimony";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    );
}

export default App;


