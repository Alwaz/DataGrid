import React from 'react'
import { IChartProps } from '../../utils/constants';

import { BarChart, PieChart, LineChart } from '../Charts/index'

const ChartComponent: React.FC<IChartProps> = ({ column, chartData }) => {
    return (
        <>
            <h2 className='p-5'>{column.label} Chart</h2>
            {chartData[column.key] && (
                <>
                    {column.chartType === 'bar' && (
                        <BarChart
                            chartDataset={chartData[column.key]}
                        />
                    )}
                    {column.chartType === 'line' && (
                        <LineChart chartDataset={chartData[column.key]} />
                    )}
                    {column.chartType === 'pie' && (
                        <PieChart chartDataset={chartData[column.key]} />
                    )}
                </>
            )}
        </>
    )
}

export default ChartComponent
