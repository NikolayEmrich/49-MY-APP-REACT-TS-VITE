import HeroCard from "../../components/heroCard/HeroCard";
import { heroes } from "../../lessons/lesson05/data";
import "../../lessons/lesson05/lesson05.css";

function Homework05() {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React map() components</p>
      <section className="grid-container">
        {heroes.map(hero => (
          // вызываю компонент c html-article и передаю нужные данные через props
          <HeroCard
            key={hero.id}
            isDark={hero.isDark}
            name={hero.name}
            image={hero.image}
            age={hero.age}
            weapons={hero.weapons}
          />
        ))}
      </section>
    </div>
  );
}

export default Homework05;