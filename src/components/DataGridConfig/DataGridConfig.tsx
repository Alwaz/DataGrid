
import React, { useEffect, useState } from 'react';
import Columns from '../Columns/Columns';

import { Input } from '@material-tailwind/react';



const DataGridConfig: React.FC = () => {
    const [colConfig, setColConfig] = useState(() => {
        // Initialize state with data from local storage, if available.
        const savedColConfig = localStorage.getItem('base_config');
        return savedColConfig ? JSON.parse(savedColConfig) : { no_of_cols: 0, api: '', path: '' };
    });
    useEffect(() => {
        localStorage.setItem('base_config', JSON.stringify(colConfig));
    }, [colConfig]);

    // Store this data in local storage
    function handleChange(e) {
        const { type, value } = e.target;
        setColConfig({
            ...colConfig,
            [e.target.name]: type === 'number' ? parseInt(value) : value
        });
    }

    return (
        <div className='bg-blue-gray-50 flex flex-wrap flex-col p-5 '>
            <h1 className='text-lg mb-3'>Please Fill the Following Required Fields</h1>
            <div className='flex flex-wrap gap-5'>
                <div className="lg:w-72">
                    <Input
                        label="No: of Columns"
                        name='no_of_cols'
                        value={colConfig.no_of_cols || 0}
                        type='number'
                        color="blue"
                        onChange={handleChange}
                        required
                        crossOrigin={undefined}
                    />
                </div>

                <div className="lg:w-72">
                    <Input
                        label="API Endpoint"
                        name='api'
                        value={colConfig.api}
                        type="text"
                        color="blue"
                        required
                        pattern='/^(ftp|http|https):\/\/[^ "]+$/'
                        onChange={handleChange}
                        data-testid="api-input"
                        crossOrigin={undefined}
                    />
                </div>

                <div className="lg:w-72">
                    <Input
                        data-testid="api-input"
                        label="Enter JSON Root Path"
                        name='path'
                        value={colConfig.path}
                        type="text"
                        color="blue"
                        required
                        onChange={handleChange}
                        crossOrigin={undefined}
                    />
                </div>
            </div>
            <Columns />
        </div>
    );
}

export default DataGridConfig;