// components/layout.js
import styles from"../styles/Layout.module.css"
import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <>
      <main className={styles.content}>{children}</main>
    <div className={styles.Footer}>
      <Link href='/' className={styles.FooterLinks}>JASON TIGER EATER</Link>
    </div>
    </>
  )
}