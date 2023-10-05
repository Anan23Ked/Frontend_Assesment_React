


const Welcome =({colorValue, setColorValue})=>{
   
    return(
        <div className="name">Hello
        <section className="box"
        style ={{backgroundColor: colorValue}}>

        <p>{colorValue ? colorValue : "Empty Colour, Add"}</p>
        <form onSubmit={(e) => e.preventDefault}>
                <input 
                autoFocus
                placeholder="Colour"
                type = "text"
                value={colorValue}
                onChange={(e) =>setColorValue(e.target.value)} />
            
            </form>

        </section>
        </div>

    )
}

export default Welcome