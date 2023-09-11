import React from 'react'
import { ITableProps, flattenNestedKeys } from '../utils/constants'
import { Card, CardBody, Typography } from '@material-tailwind/react'



const Table: React.FC<ITableProps> = ({ columns, data }) => {


    const mappedData = flattenNestedKeys(data, columns);

    return (
        <Card className="h-80 w-90 ">
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max  table-auto text-left">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="h4"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {column.label}
                                    </Typography>

                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {mappedData?.map((item: object, rowIndex: number) => (
                            // TODO: Index shouldn't be used as key
                            <tr key={rowIndex}>
                                {columns.map((column) => (
                                    <td key={column?.key}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item[column.key]}
                                        </Typography>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>

        </Card>
    )
}

export default Table
