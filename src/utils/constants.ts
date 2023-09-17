// types
export type Primitive = string | number | boolean | bigint | Date | undefined;
export type ChartType = "bar" | "line" | "pie";

// interfaces
export interface IColumnConfig {
  label: string;
  key: string;
  dataType: Primitive;
  renderChart?: boolean;
  chartType?: ChartType;
  chartlabelKey?: string; // config the column name for x-axis chart label
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

// Flatten nested object keys.
export const flattenNestedKeys = (data: IDataRow, config: IColumnConfig[]) => {
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
