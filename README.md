
# React Data Grid

The DataGrid component is a configurable and responsive data grid widget for displaying tabular data with optional support for chart integration.

## Getting Started

### Step 1: Enter the following Information
* **Enter Number of columns** 
    - Specify How many columns do you want in table?
* **API End point**
   - The source from where you want to fetch data from.
* **JSON Path**
   - Very important 
   
**Note:** To format your JSON path correctly, you can use a JSON path evaluator tool like [JSONPath Evaluator](https://jsonpath.com/). Ensure that your JSON path selects an array of objects to correctly populate the DataGrid.



### Step 2: Click on Add Column button

### Step 3: Fill out the following Data for to Configure each Column.

* **Label**
    - Represents the name of your column.
* **key**
   - A required unique key for the column. This key is used to identify the data associated with the column.
* **Data Type**
   - Data type for your columns (string, number, Date)
   
If you want to display Chart for any specific column, just check the Render Chart check box and fill out the following details.

* **Chart Type** (pie, line, bar)
* **Chart Label Key** (Value to display on x-axis)


### Step 4: Click on Generate table.


## Packages Used
* [tailwindcss](https://tailwindcss.com/)
* [@material-tailwind/react](https://www.material-tailwind.com/)
* [axios](https://www.npmjs.com/package/axios)
* [jsonpath](https://www.npmjs.com/package/jsonpath)
* [react-chartjs-2](https://react-chartjs-2.js.org/)
* [react-super-responsive-table](https://www.npmjs.com/package/react-super-responsive-table)


## Demo

https://www.loom.com/share/4921a86862aa492185a2669c125c909c?sid=be709b2f-82c0-4a7e-a29c-0ef67cdb9861
