import Login from './components/Login/Login'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.body}>
      <div>
        <Login />
      </div>
    </main>
  )
}
