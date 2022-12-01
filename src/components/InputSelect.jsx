export default function InputSelect({label, options=[], setValue, value, errorMessage}){

    const showOptions = ()=>{
        return options.map(e => <option key={e} value={e}>{e}</option>)
    }

    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <select className="form-select" value={value} onChange={e => setValue(e.target.value)}>
                <option value=""></option>
                {showOptions()}
            </select>
            <div className="form-text">{errorMessage}</div>
        </div>
    )
}
