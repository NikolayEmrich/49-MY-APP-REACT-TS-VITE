import React, { useEffect, useState } from 'react'
import MyButton from '../../components/myButton/myButton'
import styles from './lesson10.module.css'
import Loader from '../../components/loader/Loader'
import cn from 'classnames'

interface ICatData {
    fact: string
    length: number
}

export default function Lesson10():JSX.Element {

    // ПРАВКА: Использовался хук для обновления состояния переменной -> заменили на добавление массива вместо переменной
    // const[catFact, setCatFact] = useState<string>('')
    const [catFacts, setCatFacts] = useState<string[]>([]);

    const [loading, setLoading] = useState<boolean>(true)

    const fetchCatFact = async ():Promise<void> => {
        const res = await fetch('https://catfact.ninja/fact')
        const data: ICatData = await res.json()
        console.log(data)

        // ПРАВКА: Ранее функция работала с переменной -> изменение на массив + Добавление ***, если в массиве больше 1-го элемента
        // setCatFacts(data.fact)
        setCatFacts((prevFacts) => 
            prevFacts.length > 0 
                ? [...prevFacts, "***", data.fact]
                : [...prevFacts, data.fact]
        );

        setLoading(false)
    }
    
    const handleGetCatFact = () => {
        setLoading(true)
        setTimeout(() => {
            fetchCatFact()
        }, 250)
    }

    useEffect(() => {
        fetchCatFact()
    }, [])

    const clearCatFacts = () => {
        setCatFacts([]);
    };

    return (
        <div className='lesson-container'>
            <h2>Lesson 10. Cat facts 🐈🐈‍⬛</h2>
            <div className={styles.buttons}>
                <MyButton func={handleGetCatFact} text='GET MORE INFO' isDanger={false}/>

                {/* УДАЛЕНИЕ КНОПКИ ПРИ ОТСУТСТВИИ ДАННЫХ В МАССИВЕ */}
                {catFacts.length > 0 && (
                <MyButton func={clearCatFacts} text='DELETE ALL DATA' isDanger={true}/>
            )}
            </div>

            {loading ? <Loader/> : (
            <div className={cn(styles.catWrapper, {[styles.clearBackGround]:catFacts.length === 0})} 
            >
                <div className={styles.content}>

                    {/* ПРАВКА: Изменение отображения одного факта с обновлением -> для массива фактов */}
                    {/* <p>{catFacts}</p> */}
                    {catFacts.map((fact, index) => (
                    <p key={index}>{fact}</p>
                    ))}
                    
                </div>
            </div>
            )}
        </div>
    )
    }
