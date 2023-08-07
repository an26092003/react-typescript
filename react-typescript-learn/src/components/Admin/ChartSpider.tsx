// import React, { useEffect, useRef } from 'react';
// import { Chart, ChartData, ChartOptions } from 'chart.js/auto';

// interface Props {
//     chartData: number[];
// }

// const RadarChart: React.FC<Props> = ({ chartData }) => {
//     const chartRef = useRef<Chart | null>(null);

//     useEffect(() => {
//         const canvas = document.getElementById('radar-chart') as HTMLCanvasElement | null;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         // Destroy the previous chart instance before creating a new one
//         if (chartRef.current) {
//             chartRef.current.destroy();
//         }

//         chartRef.current = new Chart(ctx, {
//             type: 'radar',
//             data: {
//                 labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
//                 datasets: [{ data: chartData }],
//             },
//             options: { responsive: true } as ChartOptions,
//         });
//     }, [chartData]);

//     useEffect(() => {
//         if (chartRef.current) {
//             chartRef.current.data = {
//                 labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
//                 datasets: [{ data: chartData }],
//             };
//             chartRef.current.update();
//         }
//     }, [chartData]);

//     return (
//         <div className="chart-container">
//             <canvas id="radar-chart" width={400} height={400}></canvas>
//         </div>
//     );
// };

// export default RadarChart;


import React, { useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions } from 'chart.js/auto';

interface Dataset {
    data: number[];
    backgroundColor: string;
}

interface Props {
    chartData: Dataset[];
}

const RadarChart: React.FC<Props> = ({ chartData }) => {
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        const canvas = document.getElementById('radar-chart') as HTMLCanvasElement | null;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                datasets: chartData,
            },
            options: { responsive: true } as ChartOptions,
        });
    }, [chartData]);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.datasets = chartData;
            chartRef.current.update();
        }
    }, [chartData]);

    return (
        <div className="chart-container">
            <canvas id="radar-chart" width={400} height={400}></canvas>
        </div>
    );
};

export default RadarChart;
