export default function Lesson06() {
    // * TypeScript

    // 1. String
    // --- НЕЯВНОЕ указанние типа переменной
    let username = 'Frodo';
    // username = 360 --- присвоить число переменной типа стринг не получится

    // --- ЯВНОЕ указанние типа переменной
    let username2:string = 'Sam';

    console.log(username);
    console.log(username2);

    // --- переприсвоение значения переменной
    username = 'Pipin';
    console.log(username);

    // 2. Number
    let number:number = 42
    console.log(number);
    number = 2 + Number('2');
    console.log(number);

    // 3. Boolean
    let isAdmin:boolean = true
    console.log(isAdmin);
    isAdmin = 2 > 3;
    console.log(isAdmin);

    // 4. null / undefined
    let emptyValue:null = null
    console.log(emptyValue);

    let empty:undefined = undefined
    console.log(empty);

    // 5. ARRAY
    const rgb: string[] = ['red', 'blue', 'green']
    console.log(rgb);

    const numbers: number[] = [1, 2, 3, 4, 5] 
    numbers.push(8)
    console.log(numbers);

    // Частный случай типизации для двух элементов в массиве
    const myArray: [string, number] = ['apple', 42]
    console.log(myArray);

    // 6. ОБЪЕКТ

    // Interface
    // Для типизаии объекта требуется протипизировать все гое ключи
    interface IHero {
        name: string,
        age: number,
        isDark: boolean;
    }

    interface IMagician extends IHero {
        magic(): void;
    }

    interface IVillian {
        name:string,
        isVillian: true
    }

    const aragorn: IHero = {
        name: 'Aragorn',
        age: 150,
        isDark: false
    }

    const gimli: IHero = {
        name: "Gimli",
        age: 50,
        isDark: false
    }

    const gendalf: IMagician = {
        magic: function (): void {
            console.log('You shell not pass!')
        },
        name: "Gendalf",
        age: 55000,
        isDark: false,
    }

    // gendalf.magic()

    const saruman: IVillian = {
        name: 'Saruman',
        isVillian: true
    }

    // Пример использует оператор union type - оператор объединения
    const heroes: (IHero | IVillian)[] = [aragorn, gimli, saruman];

    heroes.push(gendalf)

    console.log(heroes)


    return (
        <div className="lesson-container">
            <h2>Lesson06</h2>
            <p>React TypeScript</p>
            <p>Самое важное на этом уроке происходит внутри компонента в теле функции и в консоли браузера ⚡️</p>
        </div>
    )
}