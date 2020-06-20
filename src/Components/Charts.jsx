import React, { useState, useEffect } from 'react';
import styles from './Charts.module.css';
import { fetchDailyData } from '../data_api';
import { Line, Bar } from 'react-chartjs-2';

//this is line chart visualization codePointAt
//I used here hook useState and useEffect
//finally return the chart value to visualize

const Charts = ()=>{
	
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);
  

 
  const lineChart = (
    dailyData.length? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.cost),
            label: 'Cost',
            borderColor: 'red',
            fill: true,
          }, {
            data: dailyData.map((data) => data.profit),
            label: 'Profit',
            borderColor: '#3333ff',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );
  

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
}
export default Charts;