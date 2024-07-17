//@ts-nocheck
import React, { useEffect, useState } from "react";
import { WeatherData } from "@/types/types";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { Spinner } from "@nextui-org/react";

const ForeCast: React.FC=({city})=>{
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const apiKey = siteConfig.api2.key
    const api=siteConfig.api2.url
    const url = `${api}${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error("Error fetching weather data:", error));
    }, [url]);
    console.log(weatherData)
    if(weatherData===null){
        return(
        <div className="flex">
            <Spinner className="justify-center" label="Loading..." size="lg"/>
        </div>     

    )
    }
    const { location, forecast } = weatherData;
    return(
        <div>
        <Table aria-label="Weather Forecast">
        <TableHeader>
            <TableColumn>Date</TableColumn>
            <TableColumn>Condition</TableColumn>
            <TableColumn>Max Temp (°C)</TableColumn>
            <TableColumn>Min Temp (°C)</TableColumn>
            <TableColumn>Cloud Cover (%)</TableColumn>
        </TableHeader>
        <TableBody>
            {forecast.forecastday.map(day => (
            <TableRow key={day.date}>
                <TableCell>{day.date}</TableCell>
                <TableCell>
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                {day.day.condition.text}
                </TableCell>
                <TableCell>{day.day.maxtemp_c}</TableCell>
                <TableCell>{day.day.mintemp_c}</TableCell>
                <TableCell>{day.day.avghumidity}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
        </div>
    )

};
export default ForeCast;