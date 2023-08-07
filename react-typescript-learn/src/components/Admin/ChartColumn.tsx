import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
interface Dataset {
  data: number[];
  backgroundColor: string;
}

interface Props {
  chartData: Dataset[];
}

const VerticalBarChart: React.FC<Props> = ({ chartData }) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets = chartData;
      chartRef.current.update();
    }
  }, [chartData]);

  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    datasets: chartData,
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBarChart;
