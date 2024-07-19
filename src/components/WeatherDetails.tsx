//@ts-nocheck
import { useEffect } from "react";
import {Card, CardHeader, CardBody,Divider,Image,Spacer} from "@nextui-org/react";

const WeatherDetails = ({weather})=>{
    return(
        <div>

            <Card className="w-full p-4 py-8 flex px-6 md:px-8 ">
                <CardHeader className="justify-center text-xl font-bold uppercase md:text-2xl ">Weather Today</CardHeader>
                <CardBody>

                    <div className="flex flex-col uppercase">
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="uppercase font-semibold">Feels Like</p>
                        <p>{weather?.current.feelslike_c}°C</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Humidity</p>
                        <p>{weather?.current.humidity}%</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Pressure</p>
                        <p>{weather?.current.pressure_mb} mb</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Visibility</p>
                        <p>{weather?.current.vis_km} km</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">High Temp</p>
                        <p>{weather?.current.temp_c}°C</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Low Temp</p>
                        <p>N/A</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">UV Index</p>
                        <p>{weather?.current.uv}</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Wind Speed</p>
                        <p>{weather?.current.wind_kph} kph</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Cloud Cover</p>
                        <p>{weather?.current.cloud}%</p>
                        </div>
                        <Divider></Divider>
                        <div className="flex justify-between py-2">
                        <p className="font-semibold">Rain</p>
                        <p>{weather?.current.precip_mm} mm</p>
                        </div>
                        <Divider></Divider>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
export default WeatherDetails;
