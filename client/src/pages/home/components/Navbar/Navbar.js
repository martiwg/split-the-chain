import styles from './Navbar.module.css'

const Navbar = (props) => {
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          <div className={styles.title}>
            SPLITtheCHAIN
          </div>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.middleTxt}>
            Support
          </div>
          <div className={styles.middleTxt}>
            About us
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.walletBtn}>
            Sign In
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar