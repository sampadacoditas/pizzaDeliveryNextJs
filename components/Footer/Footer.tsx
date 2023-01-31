import React from 'react'
import Image from "next/image"
import styles from "../../styles/Footer.module.scss"
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh yes,WE DID THE PIZZA,WELL BAKED SLICE OF pIZZAA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Find Our Restaurant
          </h1>
          <p className={styles.text}>
            1654 R.Don Road #304
            <br />NewYork,85022
            <br />(604) 123456
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304
            <br />NewYork,85022
            <br />(604) 123456
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304
            <br />NewYork,85022
            <br />(604) 123456
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304
            <br />NewYork,85022
            <br />(604) 123456
          </p>
        </div> 
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday Util Friday
            <br />9:00-22:00
          </p>
          <p className={styles.text}>
            Saturday-sunday
            <br />12:00-24:00
          </p>
        </div>

      </div>
    </div>
    
  )
}
