// components/layout.js
import styles from"../styles/Layout.module.css"
import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <div className={styles.background}>
     <div className={styles.Header}>
        <Link href='/about'>
            <a  className={styles.HeaderLinks}>
            <div className={styles.dot}></div> &nbsp;ABOUT
            </a>
            </Link>
        <Link href='/shop'>
            <a className={styles.HeaderLinks}>
            SHOP &nbsp; <div className={styles.dot}></div>
            </a>
            </Link>
     </div>
      <main className={styles.content}>{children}</main>
      <div  className={styles.Footer}>
        <Link  href='/media'>
            <a className={styles.FooterLinks}>
            <div className={styles.dot}></div> &nbsp; MEDIA
            </a>
            </Link>
        <Link href='/'>
            <a className={styles.FooterLinks}>
            JAGUAR &nbsp; <div className={styles.dot}></div>
            </a>
            </Link>
     </div>
    </div>
  )
}