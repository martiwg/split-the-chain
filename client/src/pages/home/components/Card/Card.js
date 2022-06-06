import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = () => {
  const [transactionCount, setTransactionCount] = useState(4371)

  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          The
          <span className={styles.title} >
            &nbsp;#1&nbsp;
            <div className={styles.svgContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" height='100%' width='100%' fill='#e9caf4' version="1.0"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M1887 3564 c-485 -75 -914 -355 -1072 -698 -56 -121 -69 -185 -69 -341 0 -118 3 -152 23 -215 110 -355 435 -647 886 -795 140 -46 266 -75 446 -102 173 -25 598 -23 779 5 426 65 778 221 972 431 115 123 182 257 213 426 21 108 16 322 -10 425 -22 91 -80 232 -129 314 -50 84 -178 222 -260 281 -125 88 -339 180 -591 254 -100 29 -130 31 -130 7 0 -15 20 -25 100 -51 200 -64 405 -160 533 -248 181 -125 322 -342 379 -584 25 -108 25 -349 -1 -448 -111 -424 -555 -692 -1236 -746 -405 -32 -847 50 -1192 221 -288 143 -500 369 -589 628 -80 230 -19 491 159 683 88 96 189 171 319 237 237 120 395 161 653 169 197 6 324 -9 469 -53 163 -50 312 -143 324 -202 11 -53 66 -54 88 -1 42 103 -124 255 -377 345 -194 69 -467 93 -687 58z"/>
              </g>
              </svg>
            </div>
          </span>
          crypto bill splitting platform
        </div>
        <div>
          <div className={styles.subtitle}>
            Over {transactionCount} transactions handled so far!
          </div>
          <Link
            to='/about'
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <div className={styles.readmore}>
              Read more
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card