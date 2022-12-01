export default function InputText({label, setValue, value, errorMessage}){

    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type="text" className="form-control" onChange={e => setValue(e.target.value)} value={value}/>
            <div className="form-text">{errorMessage}</div>
        </div>
    )
}
