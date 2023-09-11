import DataGrid from "./components/DataGrid"
import { API, columns } from "./utils/constants"

function App() {

  return (
    <DataGrid
      apiEndpoint={API}
      columns={columns}
      jsonPath={'$.data.*'}
    />
  )
}

export default App
