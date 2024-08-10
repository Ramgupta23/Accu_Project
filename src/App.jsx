import { Suspense, useState } from "react";
import "./App.css";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp";
import Header from "./components/Header/Header";

function App() {

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
        
        <BrowserRouter>
        <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Website />} />
                <Route path="/login" element={<LoginSignUp/>}/>
  
            </Routes>
          </Suspense>
        </BrowserRouter>
  );
}

export default App;

