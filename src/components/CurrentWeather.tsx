// @ts-nocheck
import {Card, CardHeader, CardBody,Divider,Image,Spacer} from "@nextui-org/react";
const CurrentWeather= ({weather})=>{
    return (
        <div>
            <Card id="Current-sm" >
                            <CardHeader id="Location">
                                <h1 className="lg:text-xl sm:text-base font-bold ">{weather?.location.name}</h1>
                                <p className="pl-1 lg:text-large font-bold text-sm"> as of {weather?.current.last_updated}</p>
                            </CardHeader>
                            <Divider></Divider>
                            <CardBody id="Current-M" className="flex flex-row">
                                <div id="Current-m1" className="flex-1">
                                    <p className="lg:text-9xl md:text-9xl font-bold text-7xl">{weather?.current.temp_c}<span>°</span></p>
                                    <p className="lg:text-2xl md:text-xl text-base">{weather?.current.condition.text}</p>
                                </div>
                                <div id="Current-m2" className="flex-2">
                                    <Image className="justify-self-start" width={180} alt="NextUI hero Image"src="https://www.iconarchive.com/download/i18088/icons-land/weather/Sunny.ico"/>
                                </div>

                            </CardBody>
            </Card>
        </div>



    )
}
export default CurrentWeather