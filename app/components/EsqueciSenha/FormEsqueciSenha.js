"use client"

import { useState } from "react";
import styles from "./FormEsqueciSenha.module.css";

export default function FormEsqueciSenha() {
  const [codigo, setCodigo] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  function VerificarSenha() {
    if (novaSenha.length >= 8 && confSenha.length >= 8) {
      if (novaSenha === confSenha) {
        alert("Senhas conferem!");
      } else {
        alert("Senha reescrita ERRADA!");
      }
    } else {
      alert("As senhas precisam ter no mínimo oito dígitos!");
    }
  }

  function codigoChange(e) {
    setCodigo(e.target.value);
  }

  function nsenhaChange(e) {
    setNovaSenha(e.target.value);
  }

  function csenhaChange(e) {
    setConfSenha(e.target.value);
  }

  function Exibir() {
    var SenhaUser1 = document.getElementById("nsenha");
    var SenhaUser2 = document.getElementById("csenha");

    if (SenhaUser1.type === "password") {
      SenhaUser1.type = "text";
    } else {
      SenhaUser1.type = "password";
    }

    if (SenhaUser2.type === "password") {
      SenhaUser2.type = "text";
    } else {
      SenhaUser2.type = "password";
    }
  }

  return (
    <>
      <header className={styles.head}>
        <h1>Esqueci minha senha</h1>
        <p>Um código será enviado no seu email ou número de telefone</p>
      </header>
      <div className={styles.formEsqueciSenha}>
        <label>
          <span>Digite o código:</span>
          <input type="text" id="codigo" value={codigo} onChange={codigoChange} required autoFocus />
        </label>
        <label>
          <span>Nova senha:</span>
          <input type="password" id="nsenha" minLength="8" value={novaSenha} onChange={nsenhaChange} required />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input type="password" id="csenha" minLength="8" value={confSenha} onChange={csenhaChange} required />
        </label>
        <button onClick={VerificarSenha} className={styles.button}>
          Confirmar
        </button>
        <button onClick={Exibir} className={styles.button}>
          Exibir senha
        </button>
      </div>
    </>
  );
}

