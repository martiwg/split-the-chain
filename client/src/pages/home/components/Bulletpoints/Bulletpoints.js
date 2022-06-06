import styles from './Bulletpoints.module.css'

const Bulletpoints = () => {
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bulletpoints}>
          <div className={styles.bulletpoint}>
            Over 10+ currencies.
          </div>
          <div className={styles.highlight}>
            Easy, secure and fast way to send cryptocurrency directly from and to your wallet.
          </div>
          <div className={styles.bulletpoint}>
            Keep track of your expenses.
          </div>
          <div className={styles.bulletpoint}>
            Add friends and save their wallets.
          </div>
          <div className={styles.bulletpoint}>
            Create billing groups.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bulletpoints