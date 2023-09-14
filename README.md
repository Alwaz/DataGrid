# React DataGrid

The `DataGrid` component is a configurable and responsive data grid widget for displaying tabular data with optional support for chart integration.

## Packages Used
* [tailwindcss](https://tailwindcss.com/)
* [@material-tailwind/react](https://www.material-tailwind.com/)
* [axios](https://www.npmjs.com/package/axios)
* [jsonpath](https://www.npmjs.com/package/jsonpath)
* [react-chartjs-2](https://react-chartjs-2.js.org/)
* [react-super-responsive-table](https://www.npmjs.com/package/react-super-responsive-table)

## Usage

Import the `DataGrid` component.

```bash
  import DataGrid from "./components/DataGrid"
```

The DataGrid component accepts the following props:

|    Name     |  Type  | Required | Description                                                                                                              |
| :---------: | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
|   columns   | Array  |   true   | An array of column required to configure objects.                                                                        |
| apiEndpoint | String |   true   | The API endpoint required to fetch data from.                                                                            |
|  jsonPath   | String |   true   | The JSON path is required it is the "root" path to parse the data. It should be formatted to select an array of objects. |

To format your JSON path correctly, you can use a JSON path evaluator tool like [JSONPath Evaluator](https://jsonpath.com/). Ensure that your JSON path selects an array of objects to correctly populate the DataGrid.

### Column configuration

To configure the columns to display in your grid. Each column is defined by an object in the `columns` array.

|   Name   |                     Type                      | Required | Description                                                                                         |
| :------: | :-------------------------------------------: | :------: | --------------------------------------------------------------------------------------------------- |
|  label   |                    String                     |   true   | The label or header text required for the column.                                                   |
|   key    |                    String                     |   true   | A required unique key for column. This key is used to identify the data associated with the column. |
| datatype | String \| Number \| Boolean \| Object \| Date |   true   | The data type of the column. This helps with data formatting and rendering.                         |

### Example Column Configuration

```javascript
const columns: IColumnConfig[] = [
  {
    label: "Name",
    key: "name",
    dataType: "string",
  },
  {
    label: "Date",
    key: "date",
    dataType: "date",
  },
];
```

### Handling Nested Keys

If your data contains nested keys within objects, as shown in the example below.

```javascript
[
  {
    name: "John",
    age: 30,
    address: {
      city: "New York",
    },
  },
];
```

you can specify the `key` accordingly using dot notation (.).

```javascript
const columns: IColumnConfig[] = [
  {
    label: "Name",
    key: "name",
    dataType: "string",
  },
  {
    label: "age",
    key: "Age",
    dataType: "number",
  },
  {
    label: "City",
    key: "address.city",
    dataType: "object",
  },
];
```

## Support for rendering Charts

You can configure columns to visualize data in Chart form.

To specify what column should display the chart, you can provide the following properties to the column config.

|     Name      |  Type   | Required | Description                                                                                         |
| :-----------: | :-----: | :------: | --------------------------------------------------------------------------------------------------- |
|  renderChart  | Boolean |  false   | If true, renders the chart for this column.                                                         |
|   chartType   | String  |   true   | Required if renderChart is true, specifies the type of chart. Supported types are (bar, line, pie). |
| chartlabelKey | String  |   true   | Required if renderChart is true, specifies the column name to display on x-axis of the chart.       |

#### Example

This example will render a Bar Chart with Age column on y-axis and address on the x-axis.

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
    renderChart: true,
    chartType: "bar",
    chartlabelKey: "address",
  },
];
```
