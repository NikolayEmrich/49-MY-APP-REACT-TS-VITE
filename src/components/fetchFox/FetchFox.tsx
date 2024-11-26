import React, { useEffect, useState } from 'react'
import MyButton from '../myButton/myButton'
import './fetchFox.css'
import Loader from '../loader/Loader'

// 5. Протипизировали данные с сервера
interface IFoxData {
    image: string
    link: string
}

export default function FetchFox():JSX.Element {

    // 3. Создали переменную состояния и функцию для её изменения с помощью useState. Вней будет хранится картинка с сервера
    const[foxImg, setFoxImg] = useState<string>('')

    // 7. Создание переключателя для отображения loader на странице
    const [loading, setLoading] = useState<boolean>(true)

    // 1. Функция получения данных с сервера (Promise добавили в самом конце)
    const fetchFox = async ():Promise<void> => {
        const res = await fetch('https://randomfox.ca/floof/')
        const data: IFoxData = await res.json()
        console.log(data)
        // 4. Записываем данные в переменную состояния для последующего использования
        setFoxImg(data.image)
        // 8. Выключаем loader перезаписав значения на false
        setLoading(false)
    }
    
    // 10. Делаем отдельную функцию-обработчик, которая сначала вызывает обработчик, а потом обновляет лису
    const handleGetFox = () => {
        setLoading(true)
        // 12. Добавляем setTimeout для более продолжительного отображения loader'а перед загрузкой картинки с лисой
        setTimeout(() => {
            fetchFox()
        }, 500)
    }

    // 2. Поместили функцию обращения к серверу useEffect() c пустым массивом зависимости (для вызова только в начале цикла
    useEffect(() => {
        fetchFox()
    }, [])

    return (
        <div className='lesson-container'>
            <h2>FetchFox 🦊</h2>
            {/* 6. Добавили в верстку картинку и кнопку с обработчиком onClick для функции */}
            {/* 11. Заменяем функцию в кнопке с fetchFox на handleGetFox (для того, чтобы сначала вызывался loader) */}
            <MyButton func={handleGetFox} text='get fox'/>

            {/* 9.1. Добавляем loader при загрузке страницы (при нажатии на кнопку loader сначала срабатывать не будет) */}
            {loading ? <Loader/> : (
            <div className="fox-wrapper">
                <img src={foxImg} alt="" />
            </div>
            )}
            {/* 9.2. Удаляем первоначальный компонент с loader'ом */}
            {/* <Loader/> */}
        </div>
    )
    }
