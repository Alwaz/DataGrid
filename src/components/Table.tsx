import React from 'react'
import { ITableProps, flattenNestedKeys } from '../utils/constants'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { Table as ResponsiveTable, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Table: React.FC<ITableProps> = ({ columns, data }) => {


    const mappedData = flattenNestedKeys(data, columns);

    return (
        <Card className="w-full h-full">
            <CardBody className="overflow-scroll px-0">
                <ResponsiveTable>
                    <Thead>
                        <Tr>
                            {columns.map((column) => (
                                <Th key={column.key} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="h4"
                                        color="blue-gray"
                                        className="font-normal uppercase text-base leading-none opacity-70"
                                    >
                                        {column.label}
                                    </Typography>
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mappedData?.map((item: object, rowIndex: number) => (
                            // TODO: Index shouldn't be used as key
                            <Tr key={rowIndex}>
                                {columns.map((column) => (
                                    <Td key={column?.key}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item[column.key]}
                                        </Typography>
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </ResponsiveTable>
            </CardBody>
        </Card>
    )
}

export default Table
