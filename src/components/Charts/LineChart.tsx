import React from 'react'
import { IChartProps } from '../../utils/constants'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const LineChart: React.FC<IChartProps> = ({ chartDataset }) => {
    return (
        <div className='flex flex-col justify-center items-center h-96'>
            Line Chart
            <div className='w-full h-full max-w-3xl'>
                <Line data={chartDataset} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    )
}

export default LineChart
