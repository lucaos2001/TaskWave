"use client"

import styles from "./NavBarHome.module.css";

export default function NavBarHome() {
    return (
        <>
          <div className={styles.Control}>
              <ul>
                  <li>Minhas Áreas</li>
                  <li>+Área</li>
                  <li>Tarefas</li>
              </ul>
          </div>
          <div><h1>Home</h1></div>
        </>
    );
}
