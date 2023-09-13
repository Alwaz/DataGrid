
import React, { Suspense, lazy, useEffect, useState } from 'react'
import axios from 'axios'
import jsonpath from 'jsonpath';
import { IChartData, IDataGridProps, IDataRow } from '../utils/constants'
import Table from './Table';

// Lazy loading chart component to reduce actual bundle size.
const LazyChartComponent = lazy(() => import('./Charts/ChartComponent'));



const DataGrid: React.FC<IDataGridProps> = ({ apiEndpoint, columns, jsonPath }) => {
    const [data, setData] = useState<IDataRow[]>([])
    const [chartData, setChartData] = useState<IChartData>({});

    const getData = async () => {
        try {
            const response = await axios.get(apiEndpoint);
            const apiData = response?.data
            // JSONPath to extract data for each column
            const columnData = jsonpath.query(apiData, jsonPath);
            setData(columnData)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiEndpoint, columns])


    useEffect(() => {
        // Preparing labels and datasets for Chart
        const chartDataConfig: IChartData = {};
        columns.forEach((column) => {
            if (column.renderChart) {
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
            <div className='h-[500px] p-10 flex flex-col justify-center items-center bg-blue-gray-50'>
                <Table columns={columns} data={data} />
            </div>

            {columns.map((column) => (
                column.renderChart && (
                    <div key={column.key} className='bg-blue-gray-50 p-10'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyChartComponent column={column} chartData={chartData} data={data} />
                        </Suspense>
                    </div>
                )
            ))}
        </>
    );

}

export default DataGrid
