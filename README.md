# React DataGrid

The `DataGrid` component is a configurable and responsive data grid widget for displaying tabular data with optional suport to chart integration.

## Usage

Import the `DataGrid` component.

```bash
  import DataGrid from "./components/DataGrid"
```

The DataGrid component accepts the following props:


* `columns` (array): An array of column configuration objects.
* `apiEndpoint` (string): The API endpoint to fetch data from.
* `jsonPath` (string): The JSON path is the **"root"** path to parse the data. It should be formatted to select an array of objects.

To format your JSON path correctly, you can use a JSON path evaluator tool like [JSONPath Evaluator](https://jsonpath.com/). Ensure that your JSON path selects an array of objects to correctly populate the DataGrid.
