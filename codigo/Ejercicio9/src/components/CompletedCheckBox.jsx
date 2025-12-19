const CompletedCheckBox = (checkd) => {
    const handleChange = () => {
        //console.log("Changing")
    }

    return <span><input type="checkBox" className="checkBox" checked={checkd.checkd} onChange={handleChange} readOnly={false} style={{marginLeft:40+"px"}} />Completada</span>
}

export default CompletedCheckBox