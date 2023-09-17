
import React, { Suspense, lazy, useEffect, useState } from 'react'
import axios from 'axios'
import jsonpath from 'jsonpath';
import { IChartData, IDataRow } from '../utils/constants'
import Table from './Table';

const LazyChartComponent = lazy(() => import('./Charts/ChartComponent'));

const DataGrid: React.FC = () => {
    const [data, setData] = useState<IDataRow[]>([])
    const [chartData, setChartData] = useState<IChartData>({});

    // get config & columns from Local storage.
    const base_config = JSON.parse(localStorage.getItem('base_config'));
    const columns = JSON.parse(localStorage.getItem('columns'));


    const getData = async () => {
        try {
            if (base_config?.api && base_config?.path) {
                const response = await axios.get(base_config?.api);
                const apiData = response?.data;
                const columnData = jsonpath.query(apiData, base_config?.path);
                setData(columnData)
            } return
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [base_config?.api, base_config?.path])


    useEffect(() => {
        const filteredColumns = columns?.filter((column) => column?.renderChart)
        const chartDataConfig: IChartData = {};
        filteredColumns?.forEach((column) => {
            if (column?.renderChart) {
                const chartLabels = data?.map((item) => item[column?.chartLabelKey]);
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
    }, [data]);

    return (
        <>
            <div className='h-[500px] p-10 flex flex-col justify-center items-center bg-blue-gray-50'>
                <Table columns={columns} data={data} />
            </div>

            {columns?.map((column) => (
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
