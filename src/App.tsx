import {SearchFilter} from "./SearchFilter.tsx";
import initialData from "./MOCK_DATA.json"
import {useState} from "react";


export interface IMockData {
    id: number,
    first_name: string,
    last_name: string,
    email: string
}

function App() {
    const [data] = useState<IMockData[]>(initialData)
    const [filterText, setFilterText] = useState<string>("")

    return <div className="container">
        <SearchFilter filterText={filterText} setFilterText={setFilterText}/>
        {data
            .filter((item) => {
                if (filterText === "") return item
                else return item.first_name.toLowerCase().includes(filterText.toLowerCase())
            })
            .map((item) => {
                return <div key={item.id}>{item.first_name}</div>
            })}
    </div>
}

export default App
