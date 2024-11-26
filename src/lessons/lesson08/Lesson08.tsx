import React, { useEffect, useState } from "react";
import MyButton from "../../components/myButton/myButton";
import Counter from "../../components/counter/Counter";
import FetchDog from "../../components/fetchDog/FetchDog";

export default function Lesson08(): JSX.Element {
    console.log("render lesson08!");

    // Переменная переключает с true на false
    const [toggle, setToggle] = useState(false);

    const handleToggle = (): void => {
        setToggle(!toggle);
    };

    // Действия которые мы помещаем в useEffect мы прячем от многокртного повторения!
    // Во 2-ом параметре мы указываем [] - действие отрботает только в начале жизненого цикла
    useEffect(() => {
        console.log('render useEffect()')
    }, [])

    return (
        <div className="lesson-container">
            <h2>Lesson08</h2>
            <p>UseEffect() hook</p>
            <p>Этот хук позволяет нам изолировать вычисления от многократного повторения при обновлении компонента. Функция принимает в себя 2 компонента.</p>
            <ol>
                <li>стрелочная функция с действием для выполнения</li>
                <li>массив зависимостей (данные при изменении которых, она будет отрабатывать)</li>
            </ol>
            <span>State: {`${toggle}`}</span>
            <MyButton
                func={handleToggle}
                isDanger={false}
                text={"change state"}
                />

                <p>Мы можем проследить все 3 этапа жизненого цикла Counter</p>
                {toggle && <Counter />}

                <FetchDog/>

        </div>
    );
}
