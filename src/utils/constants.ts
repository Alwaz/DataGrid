// constants
export const API = `https://us-central1-fir-apps-services.cloudfunctions.net/transactions`;

//export const API = `https://jsonplaceholder.typicode.com/posts`;

// types
export type Primitive = string | number | boolean | bigint | Date;
export type ChartType = "bar" | "line" | "pie";

// interfaces
export interface IColumnConfig {
  label: string;
  key: string;
  dataType: Primitive;
  displayChart?: boolean;
  chartType?: ChartType;
  labelKey?: string; // config the column name for chart label
}

export interface IDataGridProps {
  apiEndpoint: string;
  columns: IColumnConfig[];
  jsonPath: string;
}

export interface ITableProps {
  columns: IColumnConfig[];
  data: IDataRow;
}

export interface IChartProps {
  column: IColumnConfig;
  data: IDataRow;
  chartData: any; //Todo: change it
}

export interface IDataRow {
  [key: string]: any;
}

export interface IChartData {
  [key: string]: {
    labels?: string[];
    datasets?: any[]; // specify type
  };
}

export interface IChartProps {
  chartDataset: IChartData;
}

// Column Config
export const columns: IColumnConfig[] = [
  {
    label: "User ID",
    key: "user_id",
    dataType: "string",
    // displayChart: true,
    // chartType: "pie",
  },
  {
    label: "Name",
    key: "name",
    dataType: "string",
    // displayChart: true,
    // chartType: "pie",
  },
  {
    label: "Amount",
    key: "amount",
    dataType: "string",
    // Properties for Chart config
    displayChart: true,
    chartType: "bar",
    labelKey: "category",
  },
  {
    label: "Category",
    key: "category",
    dataType: "string",
  },
  {
    label: "Created At",
    key: "created_at",
    dataType: new Date(),
  },
];
