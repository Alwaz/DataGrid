// constants
// export const API = `https://us-central1-fir-apps-services.cloudfunctions.net/transactions`;

//export const API = `https://jsonplaceholder.typicode.com/posts`;

export const API = `https://mocki.io/v1/aae57b4a-c429-48df-a24e-026d02a38840`;

// types
export type Primitive = string | number | boolean | bigint | Date | undefined;
export type ChartType = "bar" | "line" | "pie";

// interfaces
export interface IColumnConfig {
  label: string;
  key: string;
  dataType: Primitive;
  displayChart?: boolean;
  chartType?: ChartType;
  chartlabelKey?: Primitive; // config the column name for chart label
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
    label: "Name",
    key: "name",
    dataType: "string",
  },
  {
    label: "address",
    key: "address",
    dataType: "string",
  },
  {
    label: "Age",
    key: "age",
    dataType: "number",
    // Properties for Chart config
    displayChart: true,
    chartType: "bar",
    chartlabelKey: "address",
  },
];

// Flatten nested object keys.
export const flattenNestedKeys = (data: object, config: IColumnConfig[]) => {
  return data.map((item) => {
    const mappedItem = {};
    config.forEach((column) => {
      const keys = column.key.split(".");
      let value = item;
      keys.forEach((key) => {
        if (value && typeof value === "object") {
          value = value[key];
        } else {
          value = undefined;
        }
      });
      mappedItem[column.key] = value;
    });
    return mappedItem;
  });
};
