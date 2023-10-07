import { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends Component {
    render() {
        return(
            <div className="App">
                <p>Basic stuff for now</p>
                <nav>
                    <ul id="navBar">
                        <li>
                            <NavLink to='/'>
                                <button className="button">
                                    Home
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                <button className="button">
                                    About
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                </Routes>

            </div>
        );
    }
}

export default App;