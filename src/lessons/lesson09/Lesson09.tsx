import React from 'react'
import styles from './lesson09.module.css'
import cn from 'classnames'
import MyButton from '../../components/myButton/myButton'

export default function Lesson09() {

    // Для просмотр что выводится в консоль в виде css-модулей
    // console.log(styles)

  return (
    <div className='lesson-container'>
        <h2 className={styles.heading}>Lesson09</h2>
        <p className={styles.desc}>CSS modules - это способ, как мы можем изолированно работать со стилями css</p>
        <p className={`${styles.boldText} ${styles.desc}`}>Задача добавления несколких классов ccs-модулей можно решить несколькими способами</p>
        <ul>
            <li>Конкатенация</li>
            <li>Шаблонная строка</li>
            <li>Библиотека ClassNames</li>
        </ul>
        {/* Использование библиотеки ClassNames */}
        <p className={cn(styles.boldText, styles.desc)}>Библиотеку ClassNames устанавливается командой "npm i classnames" и импортируется в нужный компонент.</p>
        <MyButton isDanger={false} text='CSS module КНОПКА'/>
    </div>
  )
}
