import styles from './Landing.module.css'

import Phones from '../../../../images/phones_landing2.png'

const Landing = () => {
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={Phones} style={{position: 'absolute', height: '60vh', maxWidth: '40vw',bottom: '2vh', right: '2%', transform: 'translateY(10%)'}}/>
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

export default Landing