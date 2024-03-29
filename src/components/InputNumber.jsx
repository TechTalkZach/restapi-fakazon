// input number 2 ggggggggggg
export default function InputNumber({label, setValue, value, errorMessage}){

    return(
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type="number" className="form-control" onChange={e => setValue(e.target.value)} value={value}/>
            <div className="form-text">{errorMessage}</div>
        </div>
    )
}
