import {Card, CardHeader, CardBody,Divider,Image,Spacer} from "@nextui-org/react";
const CurrentWeather= ({weather})=>{
    return (
        <div>
        <Card id="Current-sm" >
                    <CardHeader id="Location">
                        <h1 className="text-xl font-bold">{weather?.location.name}</h1>
                        <p className="pl-1 text-large font-bold"> as of {weather?.current.last_updated}</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody id="Current-M" className="flex flex-row">
                        <div id="Current-m1" className="flex-1">
                            <p className="text-9xl font-bold">{weather?.current.temp_c}<span>°</span></p>
                            <p className="text-lg">{weather?.current.condition.text}</p>
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