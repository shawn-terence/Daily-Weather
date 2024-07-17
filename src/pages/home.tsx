import {siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody,Divider,Image,Spacer} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import WeatherDisplay from "@/components/ForeCast";
import BarChartF from "@/components/BarChart";
import DefaultLayout from "@/layouts/default";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherDetails from "@/components/WeatherDetails";

function Home({city,setCity}:any){
    const api=siteConfig.api1.url
    const apiKey=siteConfig.api1.key
    const [weather,setWeather]=useState<Weather |undefined>(undefined)
    useEffect(() => {
        fetch(`${api}${apiKey}&q=${city}&aqi=yes`)
          .then(res => res.json())
          .then(data => setWeather(data));
      }, [city, api, apiKey]);
    return(
        <DefaultLayout city={city} setCity={setCity}>
            <div>
                <CurrentWeather weather={weather}/>
                <WeatherDetails weather={weather}/>
            </div>
        
        </DefaultLayout>
    )

};
export default Home;