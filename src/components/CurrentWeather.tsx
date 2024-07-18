// @ts-nocheck
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Icons } from "@/icons/current-icons";

const defaultIcons = {
    rain: Icons['rain'],
    snow: Icons['snowy'],
    clear: Icons['clear'],
    cloudy: Icons['cloudy'],
    sunny: Icons['sunny'],
    mist: Icons['mist'],
    fog: Icons['fog'],
    smog: Icons['smog']
};

const getIconUrl = (condition) => {
    const conditionText = condition?.toLowerCase();

    if (Icons[conditionText]) {
        return Icons[conditionText];
    }

    if (conditionText.includes('rain')) {
        return defaultIcons['rain'];
    }
    if (conditionText.includes('snow')) {
        return defaultIcons['snow'];
    }
    if (conditionText.includes('clear')) {
        return defaultIcons['clear'];
    }
    if (conditionText.includes('cloudy')) {
        return defaultIcons['cloudy'];
    }
    if (conditionText.includes('mist')) {
        return defaultIcons['mist'];
    }
    if (conditionText.includes('fog')) {
        return defaultIcons['fog'];
    }
    if (conditionText.includes('smog')) {
        return defaultIcons['smog'];
    }

    return defaultIcons['rain'];
};

const CurrentWeather = ({ weather }) => {
    const conditionText = weather?.current?.condition?.text?.toLowerCase() || 'sunny';
    const iconUrl = getIconUrl(conditionText);

    return (
        <div>
            <Card id="Current-sm">
                <CardHeader id="Location">
                    <h1 className="lg:text-xl sm:text-base font-bold">{weather?.location.name}</h1>
                    <p className="pl-1 lg:text-large font-bold text-sm">as of {weather?.current.last_updated}</p>
                </CardHeader>
                <Divider />
                <CardBody id="Current-M" className="flex flex-row">
                    <div id="Current-m1" className="flex-1">
                        <p className="lg:text-9xl md:text-9xl font-bold text-7xl">{weather?.current.temp_c}<span>°</span></p>
                        <p className="lg:text-2xl md:text-xl text-base">{weather?.current.condition.text}</p>
                    </div>
                    <div id="Current-m2" className="flex-2">
                        <Image className="justify-self-start" width={180} src={iconUrl} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default CurrentWeather;
