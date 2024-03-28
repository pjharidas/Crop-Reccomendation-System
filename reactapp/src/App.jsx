import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { AboutUs } from "./pages/AboutUs";
import { LoginSignup } from "./pages/LoginSignup";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <LoginSignup/> } />
          <Route path="/dashboard">
            <Route index element={<Dashboard/>}></Route>
          </Route>
          <Route path="/about" element={ <AboutUs/> }/>

          <Route path="*" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App