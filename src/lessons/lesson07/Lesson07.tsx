import React from 'react'
import MyButton from '../../components/myButton/myButton'

export default function Lesson07() {

// * ФУНКЦИИ!
// Тип параметра указывается через двоеточие в круглых скобках
//  Тип возвращенного значения указывается псоле в круглых скобках

// --- Функция с return'ом ---
// const showMessage = (message: string) => {
//     console.log(`message: ${message}`)
//     return `message: ${message}`
// }

// --- Функция без return'а ---
const showMessage = (message: string): void => {
    console.log(`message: ${message}`)
}

// showMessage("Hello!");

const sum = (a:number, b:number):number => a + b

const sumToString = (a:number, b:number):string => String(a + b)

// Результат как строка
const result2:string = sumToString(42, 100)

// Результат как число
const result:number = sum(42, 100)

// console.log(result)
// console.log(result2)

// * ТИП ANY - Использование только в крайнем случае!
// Лучше не использовать ANY СОВСЕМ!!!

// УБИЙСТВО ТИПИЗАЦИИ!!!
const someVar:any = 'Hello'

// * UNION TYPE
// Оператор с выбором несколькими типами данных!
// Используем по минимому!
let stringOrNumber: string | number = 42;

// Пример с конкретными значениями строк
type ButtonType = 'button' | 'reset' | 'submit';

// Типизаия защищает нас от ошибок в типах данных!
let buttonType: ButtonType = "submit";

//   -----  !!! ТИПИЗАЦИЯ ОБЪЕКТОВ ЧЕРЕЗ TYPE !!! ------

// Типизируя объект используются необязательное св-во для типизации -  ?:
type Animal = {
    name: string
    sound(): void
    hasOwner?: boolean
}

type Dog = Animal & {
    breed: string
}

// Собака без хозяина
const dogWithTwoTypes: Dog = {
    name: 'Johny',
    sound() {
        console.log('Woof!')
    },
    breed: 'Labrador'
}

// Собака безз хозяина
const dog: Animal = {
    name: 'Johny',
    sound() {
        console.log('Woof!')
    }
}

// Кошка с хозяином
const cat: Animal = {
    name: 'Catty',
    sound() {
        console.log('Woof!')
    },
    hasOwner: true
}

// Вызов WOOF!
// dog.sound()

// *   -------  Generics type.  --------

function makeArray<T>(first:T, second:T):T[] {
    return[first, second]
}

const arr1:number[] = makeArray<number>(42, 100)
console.log(arr1)

const arr2:string[] = makeArray<string>('apple', 'orange')
console.log(arr2)


  return (
    <div className='lesson-container'>
        <h2>Lesson07</h2>
        <p>React TypeScript Part 2.</p>
        <MyButton text='TypeScript button'/>
        </div>
  )
}
