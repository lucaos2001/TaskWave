"use client"

import { useState } from "react";
import styles from "./Cadastro.module.css";

export default function FormCadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function nomeChange(e) {
    setNome(e.target.value);
  }

  function telefoneChange(e) {
    // Obtenha o valor do campo de telefone
    const inputTelefone = e.target.value;

    // Remova caracteres não numéricos
    const numeroLimpo = inputTelefone.replace(/\D/g, "");

    // Garanta que o número máximo de dígitos seja 11
    const numeroFormatado = numeroLimpo.slice(0, 11);

    // Formate o número de telefone
    const numeroFormatadoFinal = formatarTelefone(numeroFormatado);

    // Atualize o estado do número de telefone
    setTelefone(numeroFormatadoFinal);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function senhaChange(e) {
    setSenha(e.target.value);
  }

  function ExibirSenha() {
    var SenhaUser = document.getElementById("senha");

    if (SenhaUser.type === "password") {
      SenhaUser.type = "text";
    } else {
      SenhaUser.type = "password";
    }
  }

  function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function formatarTelefone(numero) {
    if (numero.length >= 2 && numero.length < 7) {
      // Adicionar espaço após o DDD
      return `${numero.slice(0, 2)} ${numero.slice(2)}`;
    } else if (numero.length >= 7) {
      // Adicionar espaço após o DDD e os 5 primeiros dígitos
      return `${numero.slice(0, 2)} ${numero.slice(2, 7)} ${numero.slice(7)}`;
    } else {
      // Manter o formato padrão
      return numero;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validarEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Restante da lógica para manipular o envio do formulário
  }

  return (
    <>
      <header className={styles.head}>
        <h1>Cadastro</h1>
        <p>Preencha as informações de acordo</p>
      </header>
      <div className={styles.formEsqueciSenha}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
              type="text"
              id="nome"
              value={nome}
              placeholder="Nome completo"
              onChange={nomeChange}
              required
              autoFocus
            />
          </label>
          <label>
            <span>Telefone: </span>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              placeholder="(00) 01234-56789"
              onChange={telefoneChange}
              maxLength="13"
              required
            />
          </label>
          <label>
            <span>Email: </span>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="exemplo@email.com"
              onChange={emailChange}
              required
            />
          </label>
          <label>
            <span id="Senha">Senha: </span>
            <input
              type="password"
              id="senha"
              minLength="8"
              value={senha}
              placeholder="Senha de 8 dígitos"
              onChange={senhaChange}
              required
            />
          </label>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
          <button type="button" onClick={ExibirSenha} className={styles.button}>
            Exibir senha
          </button>
        </form>
      </div>
    </>
  );
}
