import { Route, Routes } from "react-router-dom"

import "./App.css"

function App() {

    return (
        <div className="app">
            <Routes >
                <Route path="/" element="">
                    <Route  path="/" element=""/>
                    <Route  path="/" element=""/>
                    <Route  path="/" element=""/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;