// Импорт картинки в переменную
import reactimg from '../../assets/reactimg.jpg'
import MyButton from '../../components/myButton/myButton'
import './lesson02.css'

// Функция-компонент называется с большой буквы
function Lesson02():JSX.Element {
    const element = <li>Element is variable</li>
    const text  ='Text for JSX tag'
    const company = "Facebook"

    // Добавлена типизация для TSX
    interface IUser {
      firstName: string
      lastName: string
    }

    const user: IUser = {
        firstName: 'Brendan',
        lastName: 'Eich'
      }

    // Функция, обрабатывающая данные объекта
    function formatUser(name: IUser) {
        return name.firstName + ' ' + name.lastName;
    }

    // Переменная для отображения данных в тернарном операторе на странице
    const isLoggedIn = false

    return (
      <div className="lesson-container">
        <h1>Lesson 02</h1>
        <p>React JSX components</p>
        <img className='react-img' src={reactimg} alt="reactImg" />
        <ul>
        {element}
            <li>{text}</li>
            <li>Company: {company}</li>
            <li>{formatUser(user)} is creator of JavaScript </li>
            <li>User {isLoggedIn ? 'is' : 'is NOT'} in the system</li>
        </ul>
        {/* Импорт кнопки */}
        {/* Если начать писать "<MyB..." и выбрать предложенный вариант, то импорт подгрузится автоматически */}
        <MyButton/>
      </div>
    );
  }

  export default Lesson02;