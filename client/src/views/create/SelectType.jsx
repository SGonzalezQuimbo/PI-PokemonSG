import './selectType.styles.css'

function SelectType({allTypesDb}){
    const allTypesList = allTypesDb;
    //console.log(`esto es en SelecType ${allTypesList}`);
    return (
        <div className="select-container">
            <select>
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