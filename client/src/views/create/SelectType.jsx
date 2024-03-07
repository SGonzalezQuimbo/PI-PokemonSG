import './selectType.styles.css'

function SelectType({allTypesDb, handleFilterType}){
    const allTypesList = allTypesDb;
    console.log(`esto es en SelecType`);
    return (
        <div className="select-container">
            <select onChange={(event) => handleFilterType(event)} defaultValue={"default"}>
                <option value="default" disabled>Seleccionar Type</option>
                {allTypesList?.map((type) => {
                    return (
                        <option key={type.id} value={type.name} >{type.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectType;