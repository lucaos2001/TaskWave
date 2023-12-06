import FormEsqueciSenha from "./FormEsqueciSenha"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <FormEsqueciSenha />
    </div>
  )
}
