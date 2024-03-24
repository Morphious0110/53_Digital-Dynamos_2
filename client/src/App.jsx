import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";
import Signin from "./pages/Signin.jsx";
import Header from "./components/Header.jsx";
import Content from "./pages/Content.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import GenerateText from "./chatbot/Chatbot.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GenerateText />
        {/* <Header/>
      <Routes>
        <Route path='/ChatBot' element={<ChatBot />}/>
        <Route path='/' element={<Home/>} />
        <Route path='/content' element={<Content/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
