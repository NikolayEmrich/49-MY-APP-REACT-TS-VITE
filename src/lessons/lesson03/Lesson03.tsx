import MyButton from '../../components/myButton/myButton'

function Lesson03():JSX.Element {

    const handleClick = (): void => {
        console.log('click!')
    }
    const handleSubmit = (): void => {
        console.log('submit!')
    }
    const handleReset = (): void => {
        console.log('reset!')
    }

    return (
        <div className="lesson-container">
            <h2>Lesson03</h2>
            <p>React props</p>
            <p>Это способ передачи данных от компонента-родителя к компоненту-ребенку</p>
            <p>Мы хотим научиться передавать в компонент разные данные:</p>
            <div>
                <MyButton myType = {'button'} text = {'Нажми меня!'} func={handleClick} isDanger = {true}/>
                <MyButton myType = {'submit'} text = {'Submit'} func={handleSubmit} isDanger = {false}/>
                <MyButton myType = {'reset'} text = {'Reset'} func={handleReset} isDanger = {false}/>
                {/* За счет значений props по умолчанию эта кнопка имеет текст и стилизацию! Но за ней нет функции!*/}
                <MyButton/>
            </div>
        </div>
    )
}

export default Lesson03;