import './myInput.css'

// 25/11/2024 - изменена типизизация с jsx -> tsx (новое *1, *2)

// * 1. добавлен интерфейс в качестве типизции для пропсов + в интерфейсе испоьзуем функцию onChange
interface IMyInputProps {
    name?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  }

// * 2. Добавлена типизация  IMyInputProps для всех параметров этой функции
// * 3.1. Добавляем value
// * 4.1. Добавляем onChange
function MyInput({name, type, placeholder = 'default text', label = 'default label', value, onChange}: IMyInputProps) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        {/* * 3.1. Добавляем value */}
        {/* * 4.1. Добавляем onChange */}
        <input onChange={onChange} placeholder={placeholder} value={value} type={type} name={name}/>
        </>
    )
}

export default MyInput;