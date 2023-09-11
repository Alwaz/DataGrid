
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jsonpath from 'jsonpath';
import { IChartData, IDataGridProps, IDataRow } from '../utils/constants'
import Table from './Table';
import ChartComponent from './Charts/ChartComponent'



const DataGrid: React.FC<IDataGridProps> = ({ apiEndpoint, columns, jsonPath }) => {
    const [data, setData] = useState<IDataRow[]>([])
    const [chartData, setChartData] = useState<IChartData>({});

    const getData = async () => {
        try {
            const res = await axios.get(apiEndpoint);
            const apiData = res?.data
            // Use JSONPath to extract data for each column
            const columnData = jsonpath.query(apiData, jsonPath);
            setData(columnData)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiEndpoint, columns])


    useEffect(() => {
        // Prepare chart data for columns configured to display charts
        const chartDataConfig: IChartData = {};
        columns.forEach((column) => {
            if (column.displayChart) {
                const chartType = column.chartType || 'bar';
                const chartLabels = data.map((item) => item.category); //This needs to be dynamic
                const chartDataset = {
                    label: column.label,
                    data: data.map((item) => item[column.key]),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                };

                chartDataConfig[column.key] = {
                    type: chartType,
                    labels: chartLabels,
                    datasets: [chartDataset],
                };
            }
        });

        setChartData(chartDataConfig);
    }, [columns, data]);

    return (
        <>
            <Table columns={columns} data={data} />

            {columns.map((column) => (
                column.displayChart && (
                    <ChartComponent key={column.key} column={column} chartData={chartData} data={data} />
                )
            ))}
        </>
    );

}

export default DataGrid
