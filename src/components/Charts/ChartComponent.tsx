import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { IChartProps } from '../../utils/constants';
Chart.register(...registerables);


const ChartComponent: React.FC<IChartProps> = ({ column, chartData }) => {
    return (
        <div >
            <h2>{column.label} Chart</h2>
            {chartData[column.key] && (
                <div style={{ maxWidth: '800px', height: '500px' }}>
                    {column.chartType === 'bar' && (
                        <Bar
                            data={chartData[column.key]}
                            options={{ maintainAspectRatio: false }}
                        />
                    )}
                    {column.chartType === 'line' && (
                        <Line
                            data={chartData[column.key]}
                            options={{ maintainAspectRatio: false }}
                        />
                    )}
                    {column.chartType === 'pie' && (
                        <Pie
                            data={chartData[column.key]}
                            options={{ maintainAspectRatio: false }}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default ChartComponent
