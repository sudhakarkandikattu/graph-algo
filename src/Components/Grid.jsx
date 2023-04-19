import Rows from "./Rows"
import {useState } from 'react';


const Grid = () => {
    let [grid,setGrid] = useState(Array(10).fill().map(() => Array(20).fill(0)))
    let rows = []
    for(let i=0;i<10;i++)
    {
        rows.push(<Rows rows={grid[i]}/>)
    }
    return(
        <div className="grid-component">
            {
                 rows.map((elem,index)=><h1>{elem}</h1>)
            }
        </div>
    )
}
export default Grid