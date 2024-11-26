import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="lesson-container">
      <br />
      <br />
      <br />
        <h1>No such Page 404</h1>
        <img width={350} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%BA%D1%80%D0%B5%D1%81%D1%82.webp/586px-%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%BA%D1%80%D0%B5%D1%81%D1%82.webp.png?20200626075251" alt="" />
        <h2>
        <Link to={'../'}>BACK TO MAIN PAGE</Link>
        </h2>
        
    </div>
  )
}
