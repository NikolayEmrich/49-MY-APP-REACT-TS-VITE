import MyButton from "../myButton/myButton";
import MyInput from "../myInput/MyInput";
import './loginForm.css'

function LoginForm() {
    return (
        <form className="login-form">
            <MyInput type = {"login"} label = {'Type your login:'} placeholder = {'login'}/>
            <MyInput type = {"email"} label = {'Type your email:'} placeholder = {'email'}/>
            <MyInput type = {"password"} label = {'Type your password:'} placeholder = {'password'}/>
            <MyButton type = {"submit"}  text = {"submit"} isDanger = {true}/>
        </form>
    )
}

export default LoginForm;