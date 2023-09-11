
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
            // JSONPath to extract data for each column
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
        // Preparing labels and datasets for Chart
        const chartDataConfig: IChartData = {};
        columns.forEach((column) => {
            if (column.displayChart) {
                const chartLabels = data.map((item) => item[column?.chartlabelKey]);
                const chartDataset = {
                    label: column.label,
                    data: data.map((item) => item[column.key]),
                    backgroundColor: ['aqua', 'red', 'orange'],
                    borderColor: '#62749d',
                    borderWidth: 1,
                };

                chartDataConfig[column.key] = {
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
