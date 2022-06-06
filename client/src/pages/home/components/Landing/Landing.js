import styles from './Landing.module.css'

const Landing = () => {
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          <div className={styles.title}>
            Share & Split<br/>bills with your<br/>Friends.
          </div>
          <div className={styles.description}>
            Split the chain is a platform that allows you to share expenses with your peers Safely with digital Cryptocurrency.
          </div>
          <div className={styles.getStartedBtn}>
            Get Started  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landin