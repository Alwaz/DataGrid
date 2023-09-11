import React from 'react'
import { Bar } from 'react-chartjs-2'
import { IChartProps } from '../../utils/constants';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart: React.FC<IChartProps> = ({ chartDataset }) => {
    return (
        <div className='flex flex-col justify-center items-center h-96'>
            Bar Chart
            <div className='w-full h-full max-w-3xl'>
                <Bar data={chartDataset} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    )
}

export default BarChart
