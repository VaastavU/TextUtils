import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    };

    return (
        <>
            <Router>
                <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} key={new Date()} />
                <Alert alert={alert} />
                <div className='container my-3'>
                    <Routes>
                        <Route exact path='/' element={<TextArea showAlert={showAlert} heading='Try TextUtils _ Enter text here' mode={mode} />} />
                        <Route exact path='/About' element={<About mode={mode} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
