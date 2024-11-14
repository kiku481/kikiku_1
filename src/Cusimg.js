function Cusimg({img_name, id}) {
    return(
        <div 
            id={id}
            style={{
                margin: "1px", 
                backgroundColor: "green",}} >
            <img src={img_name}></img>
        </div>
    );
}

export default Cusimg;