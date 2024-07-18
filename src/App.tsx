//@ts-nocheck
import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import Home from "./pages/home";
import axios from "axios";

function App() {
  const [city,setCity]=useState("nairobi")
  const [loading,setloading]=useState(true)
  useEffect(() => {
    const fetchCity = async (latitude, longitude) => {
      try {
        const response = await axios.get('http://api.openweathermap.org/geo/1.0/reverse', {
          params: {
            lat: latitude,
            lon: longitude,
            appid: 'dcbfc041780739f54647455e1945b633',
          },
        });
        const data = response.data;
        if (data && data.length > 0) {
          setCity(data[0].state);
          console.log(data[0].state)
        }
      } catch (error) {
        console.error('Error fetching city:', error);
      } finally {
        setLoading(false);
      }
    };

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      fetchCity(latitude, longitude);
    };

    const error = (err) => {
      console.error('Error getting geolocation:', err);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  return (
    <Routes>
      <Route element={<Home city={city} setCity={setCity}/>} path="/" />
    </Routes>
  );
}

export default App;
