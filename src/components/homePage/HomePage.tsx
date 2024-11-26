import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.gridLessonContainer}>
      <Link to='homework-3'><div className={styles.homework}>Homework 3</div></Link>
      <Link to='homework-4'><div className={styles.homework}>Homework 4</div></Link>
      <Link to='homework-5'><div className={styles.homework}>Homework 5</div></Link>
      <Link to='homework-12'><div className={styles.homework}>Homework 12</div></Link>

      {/* <p>Home Page 🏡</p> */}

      <Link to='lesson-1'><div>Lesson 1</div></Link>
      <Link to='lesson-2'><div>Lesson 2</div></Link>
      <Link to='lesson-3'><div>Lesson 3</div></Link>
      <Link to='lesson-4'><div>Lesson 4</div></Link>
      <Link to='lesson-5'><div>Lesson 5</div></Link>
      <Link to='lesson-6'><div>Lesson 6</div></Link>
      <Link to='lesson-7'><div>Lesson 7</div></Link>
      <Link to='lesson-8'><div>Lesson 8</div></Link>
      <Link to='lesson-9'><div>Lesson 9</div></Link>
      <Link to='lesson-10'><div>Lesson 10</div></Link>
      <Link to='lesson-11'><div>Lesson 11</div></Link>
      <Link to='lesson-12'><div>Lesson 12</div></Link>
      <Link to='lesson-13'><div>Lesson 13</div></Link>
      <Link to='lesson-14'><div>Lesson 14</div></Link>
      <Link to='lesson-15'><div>Lesson 15</div></Link>
      <Link to='lesson-16'><div>Lesson 16</div></Link>
      
    </div>
  )
}
