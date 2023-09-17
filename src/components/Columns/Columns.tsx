import { Button, Checkbox, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import DataGrid from '../DataGrid';

interface IColumnConfig {
    label: string;
    key: string;
    dataType: string;
    renderChart?: boolean;
    chartType?: string;
    chartLabelKey?: string;
}

const Columns: React.FC = () => {

    // get that data from local storage and use here
    const baseConfig = JSON.parse(localStorage.getItem('base_config'));
    const [columns, setColumns] = useState<IColumnConfig[]>(() => {
        const savedColumns = localStorage.getItem('columns');
        return savedColumns ? JSON.parse(savedColumns) : [];
    });

    const [showTable, setShowTable] = useState<boolean>(false);
    // Function to handle adding columns based on user input
    const handleAddColumns = () => {
        if (baseConfig?.no_of_cols > 0) {
            const newColumns: IColumnConfig[] = [];
            for (let i = 0; i < baseConfig?.no_of_cols; i++) {
                newColumns.push({
                    label: '',
                    key: '',
                    dataType: '',
                    renderChart: false,
                    chartType: '',
                    chartLabelKey: '',
                });
            }
            setColumns(newColumns);
        }
    };

    const isEmpty = (value) => {
        return value?.label === '' || value?.key === '' || value?.dataType === '';
    }


    // This function is responsible for generating table.
    const generateTable = () => {
        if (columns?.length > 0 && columns.every(col => !isEmpty(col))) {
            localStorage.setItem('columns', JSON.stringify(columns));
            setShowTable(true);
        }
        return
    }
    return (
        <div className='mt-10'>
            <Button color="blue" onClick={handleAddColumns}>Add Columns</Button>

            {columns.length > 0 && (
                <div className='mt-10'>
                    <h2>Please Configure Data to generate Table</h2>
                    <div className='rounded p-3'>
                        {columns.map((column, index) => (
                            <div key={index} className='flex flex-col h-40 '>
                                <div className='flex items-center h-full flex-wrap  gap-5'>
                                    <h3>Column {index + 1}</h3>
                                    <div className="lg:w-72">
                                        <label className='text-sm text-gray-700'>Label:</label>
                                        <div className="lg:w-72">
                                            <Input
                                                type="text"
                                                value={column.label}
                                                onChange={(e) => {
                                                    const updatedColumns = [...columns];
                                                    updatedColumns[index].label = e.target.value;
                                                    setColumns(updatedColumns);
                                                }}
                                                crossOrigin={undefined}
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:w-72">
                                        <label className='text-sm text-gray-700'>Key:</label>
                                        <Input
                                            type="text"
                                            value={column?.key}
                                            onChange={(e) => {
                                                const updatedColumns = [...columns];
                                                updatedColumns[index].key = e.target.value;
                                                setColumns(updatedColumns);
                                            }}
                                            crossOrigin={undefined}
                                        />
                                    </div>


                                    <div className="lg:w-72">
                                        <label className='text-sm text-gray-700'>Data Type:</label>

                                        <Input
                                            type="text"
                                            value={column.dataType}
                                            onChange={(e) => {
                                                const updatedColumns = [...columns];
                                                updatedColumns[index].dataType = e.target.value;
                                                setColumns(updatedColumns);
                                            }}
                                            crossOrigin={undefined}
                                        />
                                    </div>

                                    <div className="lg:w-72 flex items-center">
                                        <label className='text-sm text-gray-700'>Render Chart:</label>
                                        <Checkbox
                                            color="blue"
                                            checked={column.renderChart}
                                            onChange={(e) => {
                                                const updatedColumns = [...columns];
                                                updatedColumns[index].renderChart = e.target.checked;
                                                setColumns(updatedColumns);
                                            }} crossOrigin={undefined} />

                                    </div>
                                    {column?.renderChart && (
                                        <div className='flex items-center gap-5 pl-24'>
                                            <div className="lg:w-72">
                                                <label className='text-sm text-gray-700'>Chart Type:</label>
                                                <Input
                                                    type="text"
                                                    value={column.chartType}
                                                    onChange={(e) => {
                                                        const updatedColumns = [...columns];
                                                        updatedColumns[index].chartType = e.target.value;
                                                        setColumns(updatedColumns);
                                                    }}
                                                    crossOrigin={undefined}
                                                />
                                            </div>
                                            <div className="lg:w-72">
                                                <label className='text-sm text-gray-700'>Chart Label Key:</label>
                                                <Input
                                                    type="text"
                                                    value={column.chartLabelKey}
                                                    onChange={(e) => {
                                                        const updatedColumns = [...columns];
                                                        updatedColumns[index].chartLabelKey = e.target.value;
                                                        setColumns(updatedColumns);
                                                    }}
                                                    crossOrigin={undefined}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button color='blue' onClick={generateTable}>Generate Table</Button>
                </div>
            )}


            {showTable && (<DataGrid />)}


        </div>
    );
};

export default Columns;
