import Pixel from "./Pixel"

const Rows = ({rows}) => {
    let pixel = []
    for(let i=0;i<20;i++)
    {
        pixel.push(<Pixel pixel={rows[i]}/>)
    }
    return(
        <div style={{
            display:"flex"
        }}>
            {
                pixel.map((elem,id)=>{
                   return <p>{elem}</p>
                })
            }
        </div>
    )
}
export default Rows