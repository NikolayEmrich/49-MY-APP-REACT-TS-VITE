import { useFormik } from "formik";
import MyButton from "../myButton/myButton";
import MyInput from "../myInput/MyInput";
import './loginForm.css'
import { useAuth } from "../../context/authContext";

// 25/11/2024 - изменена типизизация с jsx -> tsx (новое *1, *2, *3, *4, *5)
// * 1. Обновлен импорт MyButton
// * 2. В файл к кнопке MyButton к интерфейсу добавлена условность ко всем пропсам "?" (т.е. можем и не передавать)
// * 3. Заменили  пропс в последней кнопкеЖ type -> MyType
// * 4. Убрали инпут-форму для логина (т.к. в задании с идентификацией пользовтаеля она нам была не нужна)
// * 5. Меняем в 1-ом интпуте тип, лебел и плейсхолдер на "юзернейм"
// * 6. Добавляем инпутом эти значения value={formik.values.username} и value={formik.values.password}
// * 7. Добавляем 2-ум инпутом эти значения onChange={formik.handleChange} предварительно указав эту функцию в интерфейсе MyButton
// * 8. Добавляем в form эти значение onSubmit={formik.handleSubmit}
// * 10. Добавляем const {user} = useAuth() в HEADER

function LoginForm() {

    // * 9. Добавляем useAuth после настройки файла authContext.tsx / setUser() добавляем в последний .then  --->  .then(data => setUser(data))
    const {setUser} = useAuth()

    // * 5. Добавили формик
    const formik = useFormik({
        initialValues: {
            username: 'emilys',
            password: 'emilyspass'
        },
        onSubmit: (values) => {
            console.log(values)
             // передаем в post запросе данные из input
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: values.username,
                  password: values.password
                })
            })
            .then(res => res.json())
            .then(data => setUser(data))
        }
    })


    return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
            <MyInput onChange={formik.handleChange} value={formik.values.username} type = {"username"} label = {'Type your username:'} placeholder = {'username'}/>
            {/* <MyInput type = {"email"} label = {'Type your email:'} placeholder = {'email'}/> */}
            <MyInput onChange={formik.handleChange} value={formik.values.password} name={"pssword"} type = {"password"} label = {'Type your password:'} placeholder = {'password'}/>
            <MyButton myType = {"submit"}  text = {"submit"} isDanger = {false}/>
        </form>
    )
}

export default LoginForm;