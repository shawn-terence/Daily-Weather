import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import Home from "./pages/home";

function App() {
  const [city,setCity]=useState("nairobi")
  return (
    <Routes>
      <Route element={<Home city={city} setCity={setCity}/>} path="/" />
    </Routes>
  );
}

export default App;
