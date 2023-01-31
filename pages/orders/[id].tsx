import React from 'react'
import styles from "../../styles/Order.module.scss"
import Image from 'next/image'
 const Order = () => {
  let status=0
  const statusClass=(index:any)=>{
   if(index-status<1)return styles.done;
   if(index-status===1) return styles.inProgress;
   if(index-status>1) return styles.undone
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
                <thead>
                <tr className={styles.tr}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    
                    <td>
                        <span className={styles.id}>123456789</span>
                    </td>
                    <td>
                        <span className={styles.name}>
                            John smith
                        </span>
                    </td>
                    <td>
                        <span className={styles.address}>chandani chouk mumbai</span>
                    </td>
                    <td>
                        <span className={styles.total}>$45.34</span>                        
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" height={30} width={30}/>
            <span>Payment</span>
            <div className={styles.checkIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" height={30} width={30}/>
            <span>Preparing</span>
            <div className={styles.checkIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" height={30} width={30}/>
            <span>On the way</span>
            <div className={styles.checkIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" height={30} width={30}/>
            <span>Delivered</span>
            <div className={styles.checkIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
      <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
              </div>  
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>$79.60
              </div>
            <button disabled className={styles.button}>PAID</button>
            </div>
      </div>
    </div>
  )
}
export default Order;