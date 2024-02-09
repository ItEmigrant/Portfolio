import './App.css';
import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {Skills} from "./loyaut/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;


