//@ts-nocheck
import {siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody,Divider,Image,Spacer} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import WeatherDisplay from "@/components/ForeCast";
import BarChartF from "@/components/BarChart";
import DefaultLayout from "@/layouts/default";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherDetails from "@/components/WeatherDetails";
import ForeCast from "@/components/ForeCast";

function Home({city,setCity}:any){
    const api=siteConfig.api1.url
    const apiKey=siteConfig.api1.key
    const [weather, setWeather] = useState<Weather | undefined>(undefined);
    useEffect(() => {
        fetch(`${api}${apiKey}&q=${city}&aqi=yes`)
          .then(res => res.json())
          .then(data => setWeather(data));
      }, [city, api, apiKey]);
    return(
        <DefaultLayout city={city} setCity={setCity}>
            <div>
                <CurrentWeather weather={weather}/>
                <Spacer y={5}/>
                <WeatherDetails weather={weather}/>
                <Spacer y={5}/>
                
                <div className="flex flex-col lg:flex-row gap-4">
                    <Spacer y={5}/>
                       <h1 className="justify-center font-bold">Forecasts</h1>
                        <WeatherDisplay city={city}/>
                    <Spacer y={5}/>

                    <Card>
                        <CardHeader className="justify-center font-bold text-lg">Air Pollution</CardHeader>
                        <CardBody>
                        <BarChartF city={city}/>
                        </CardBody>
                    </Card>
                </div>
            </div>
        
        </DefaultLayout>
    )

};
export default Home;