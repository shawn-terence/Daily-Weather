//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { siteConfig } from "@/config/site";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Spinner } from '@nextui-org/react';
let airPollutionList=[];

const BarChartF =({city})=>{
  const City = city.split('County')[0].trim();
  const pollutionApi = siteConfig.api4.url;
  const geoApi = siteConfig.api3.url;
  const apiKey = siteConfig.api3.key;

  const [coordinates, setCoordinates] = useState({});
  const [airPollution, setAirPollution] = useState({});
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`${geoApi}?q=${City}&limit=1&appid=${apiKey}`);
        const data = await response.json();
        if (data.length > 0) {
          setCoordinates({
            lat: data[0].lat,
            lon: data[0].lon,
          });
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [city]);

  useEffect(() => {
    const fetchAirPollution = async () => {
      if (coordinates.lat && coordinates.lon) {
        try {
          const response = await fetch(`${pollutionApi}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`);
          const data = await response.json();
          airPollutionList = data.list || []; // Set global air pollution list
          setAirPollution(data);
        } catch (error) {
          console.error('Error fetching air pollution:', error);
        }
      }
    };

    fetchAirPollution();
  }, [coordinates]);

  const formatDataForChart = () => {
    if (airPollutionList.length > 0) {
      const { components } = airPollutionList[0];
      return Object.keys(components).map((key) => ({
        name: key.toUpperCase(),
        value: components[key],
      }));
    }
    return [];
  };
  return (
    <div id="Chart-container">
      {formatDataForChart().length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={formatDataForChart()}
            margin={{
              top: 20,
              right: 5,
              left: 2,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Spinner label='Loading...' size='lg'/>

      )}
    </div>
  );
};
export default BarChartF;