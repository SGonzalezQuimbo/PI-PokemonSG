import './selectType.styles.css'

function SelectType({allTypesDb, changeHandlerType}){
    const allTypesList = allTypesDb;
    console.log(`esto es en SelecType`);
    return (
        <div className="select-container">
            <select onChange={changeHandlerType} defaultValue={"default"} name="types">
                <option value="default" name="default" >Seleccionar Type</option>
                {allTypesList?.map((type) => {
                    return (
                        <option key={type.id} value={type.name} name={type.id} >{type.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectType;