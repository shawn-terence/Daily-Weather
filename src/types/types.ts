// types.ts

export interface Location {
    name: string;
    country: string;
  }
  
  export interface Condition {
    text: string;
    icon: string;
  }
  
  export interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    condition: Condition;
  }
  
  export interface ForecastDay {
    date: string;
    day: Day;
  }
  
  export interface Forecast {
    forecastday: ForecastDay[];
  }
  
  export interface WeatherData {
    location: Location;
    forecast: Forecast;
  }
  interface WeatherDisplayProps {
    city: string;
  } 