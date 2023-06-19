import React from "react"
import 'bulma/css/bulma.css'
import Table from "./components/Table"
import getTableData from "./api"
import { useState } from "react"

const App = ()=>{
    const [tableData,setTable] = useState([]);

    const handleTable = async () => {
        const  result = await getTableData()
        setTable(result)
       
    }
    
    return (
        < >
            <button  onClick={handleTable}>Fetch data</button>
            <Table data={tableData}/>
        </>    
    )
}

export default App