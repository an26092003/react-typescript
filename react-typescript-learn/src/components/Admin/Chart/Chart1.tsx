import React, { useEffect, useState } from 'react';
import RadarChart from '../ChartSpider';
import './Chart.css'
const Chart1 = () => {
    const initialData1 = [0, 1, 2, 3, 4, 5, 6, 7];
    const initialData2 = [3, 2, 1, 5, 0, 3, 2, 1];
    const initialData3 = [5, 1, 6, 0, 2, 4, 2, 3];

    const [datasets, setDatasets] = useState([
        { data: initialData1, backgroundColor: 'rgba(15, 158, 235, 0.613)' },
        { data: initialData2, backgroundColor: 'rgba(224, 20, 20, 0.473)' },
        { data: initialData3, backgroundColor: 'rgba(22, 227, 73, 0.538)' },

    ]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedDatasets = datasets.map(dataset => ({
                ...dataset,
                data: dataset.data.map(() => Math.floor(Math.random() * 10)),
            }));
            setDatasets(updatedDatasets);
        }, 5000); // Update every 5 seconds

        return () => clearInterval(intervalId);
    }, [datasets]);

    return (
        <div className='chart__spider'>
            <RadarChart chartData={datasets} />
        </div>
    );
};

export default Chart1
