import styles from "./Login.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Login ()  {
    return (
        <div className={styles.Container}>
            <div className={styles.LogoContainer}>
                <img src="logo.png" alt="Logo da Aplicação" className={styles.logo} />
            </div>
            <div className={styles.LoginContainer}>
                <div className={styles.row}>
                    <label className={styles.Label}>Email: </label>
                    <input type="email" name="email" placeholder="Email@Email.com" required className={styles.input} autoFocus />
                </div>
                <div className={styles.row}>
                    <label className={styles.Label}>Senha: </label>
                    <input type="password" name="password" placeholder="8 Digitos" required className={styles.input}/>
                </div>
                <button type="submit" className={styles.Button}>
                    <Link href="components/NavHome">
                        Entrar
                    </Link>
                </button>
                <button className={styles.Button}>
                    <Link href="components/EsqueciSenha">
                        Esqueci a senha
                    </Link>
                </button>
                <button href="#" className={styles.Button}>
                    <Link href="components/Cadastro">
                        Cadastrar-se
                    </Link>
                </button>
            </div>
        </div>
      );
      
      
};