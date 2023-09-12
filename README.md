
# React DataGrid

The `DataGrid` component is a configurable and responsive data grid widget for displaying tabular data with optional suport to chart integration.


## Usage

Import the `DataGrid` component.

```bash
  import DataGrid from "./components/DataGrid"
```

The DataGrid component accepts the following props:


* `columns` (Array): An array of column configuration objects.
* `apiEndpoint` (String): The API endpoint to fetch data from.
* `jsonPath` (String): The JSON path is the **"root"** path to parse the data. It should be formatted to select an array of objects.

To format your JSON path correctly, you can use a JSON path evaluator tool like [JSONPath Evaluator](https://jsonpath.com/). Ensure that your JSON path selects an array of objects to correctly populate the DataGrid.


### Column configuration
To configure the columns to display in your grid. Each column is defined by an object in the `columns` array.

* `label` (string): The label or header text for the column.
* `key` (string): A unique key for the column. This key is used to identify the data associated with the column.
`datatype` (string): The data type of the column. This helps with data formatting and rendering. Supported types include:
 - `string`: Text or string data.
  - `number`: Numeric data.
  - `date`: Date data.
  - `object`: Boolean data.






### Example Column Configuration

```javascript
const columns: IColumnConfig[] = [
  {
    label: 'Name',
    key: 'name', 
    dataType: 'string'
  },
  {
    label: 'Date', 
    key: 'date', 
    dataType: 'date'
  },
];
```

###  Handling Nested Keys

If your data contains nested keys within objects, as showed in example below. 


```javascript
[
  {
      "name": "John",
      "age": 30,
      "address": {
        "city": "New York"
      }
   },
]

```


you can specify the `key` accordingly using dot notation (.).

```javascript
const columns: IColumnConfig[] = [
  {
    label: 'Name',
    key: 'name', 
    dataType: 'string'
  },
  {
    label: 'age', 
    key: 'Age', 
    dataType: 'number'
  },
   {
    label: 'City', 
    key: 'address.city', 
    dataType: 'object'
  },
];
```


## Support for displaying Charts

You can configure columns to visualize data in Chart form.

To specify what column should display chart you can provide the following propertise to column objects.

* `displayChart` (boolean): Set it to true to render chart for this column.
* `chartType` (string): Specify the type of chart. Supported types are (bar, line, pie)
* `chartlabelKey` (string): Specify the column name to display on x-axis in chart.



#### Example
This example will render Bar Chart with Age column on y-axis and address on x-axis.
```javascript
const columns: IColumnConfig[] = [
  {
    label: "address",
    key: "address",
    dataType: "string",
  },
  {
    label: "Age",
    key: "age",
    dataType: "number",
    displayChart: true,
    chartType: "bar",
    chartlabelKey: "address",
  },
];
```
