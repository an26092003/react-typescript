import React, { useEffect, useState } from 'react';
import VerticalBarChart from '../ChartColumn';
import './Chart.css'
const Chart2 = () => {
    const initialData1 = [0, 1, 2, 3, 4, 5, 6, 7];
    const initialData2 = [3, 2, 1, 5, 0, 3, 2, 1];

    const [datasets, setDatasets] = useState([
        { data: initialData1, backgroundColor: 'rgba(48, 114, 212, 0.613)' },
        { data: initialData2, backgroundColor: 'rgba(203, 203, 203, 0.473)' },

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
        <div className='chart__column'>
            <VerticalBarChart chartData={datasets} />
        </div>
    );
};

export default Chart2
