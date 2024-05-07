'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'line', // Specify your chart type here
        data: data,
        options: options
      });

      return () => newChartInstance.destroy();
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default Charts;