import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { IChartProps } from '../../utils/constants';

Chart.register(...registerables);


const PieChart: React.FC<IChartProps> = ({ chartDataset }) => {

    return (
        <div className='flex flex-col justify-center items-center h-96'>
            Pie Chart
            <div className='w-full h-full max-w-3xl'>
                <Pie data={chartDataset} options={{ maintainAspectRatio: false }} />

            </div>
        </div>
    )
}

export default PieChart
