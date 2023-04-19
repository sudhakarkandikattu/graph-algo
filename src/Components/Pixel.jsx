const Pixel = ({pixel}) => {
    let color = "white"
    if(pixel===1) color = "green"
    else if(pixel===2) color = "red"
    else if(pixel===3) color = "gray"
    return(
        <div  style={{
            width:"50px",
            height:"50px",
            background:color,
            margin:"2px"
        }}>
            
        </div>
    )
}
export default Pixel