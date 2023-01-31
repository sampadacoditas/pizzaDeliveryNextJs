import React from 'react'
import Image from "next/image"
import styles from "../../styles/PizzaCard.module.scss"
export const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="300" height="300"/>
        <h1 className={styles.title}>FLORI DI ZUCCA</h1>
        <span className={styles.price}>$19</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit shhr
        </p>

    </div>
  )
}
