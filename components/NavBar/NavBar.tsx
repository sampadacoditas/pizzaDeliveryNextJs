import Image from 'next/image'
import React from 'react'
import styles from "../../styles/NavBar.module.scss"
export const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="" width={32} height={32}/>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>OrderNow!</div>
                <div className={styles.text}>34567890923</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>HomePage</li>
                <li className={styles.listItem}>Products</li> 
                <li className={styles.listItem}>Menu</li>
                <Image src="/img/logo.png" alt='' width={160} height={69}/>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Blog</li> 
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" height={30} width={30} />
                <div className={styles.counter}>2</div>
            </div>
        </div>
    </div>
  )
}
