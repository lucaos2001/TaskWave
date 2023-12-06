import FormCadastro from "./Cadastro"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <FormCadastro />
    </div>
  )
}
