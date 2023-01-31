import React from 'react'
import styles from "../../styles/PizzaList.module.scss"
import { PizzaCard } from '../PizzaCard/PizzaCard'
export const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza In Town</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, debitis! Assumenda a ut repellat magnam nesciunt beatae iste, corporis veritatis itaque necessitatibus doloremque exercitationem hic dolorem velit dolor quasi! Sunt.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>

    </div>
  )
}
