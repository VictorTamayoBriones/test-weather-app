import { InputBox } from "./style"

export const Input = ({label, type, placeholder, name, value, onChange, errText}) =>{
    return(
        <InputBox>
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
            <p className="err" >{errText}</p>
        </InputBox>
    )
}